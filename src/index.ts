import axios, { AxiosRequestConfig } from 'axios';
import { createHash } from 'crypto';
import { format } from 'date-fns';
import { isArray, isObject } from 'util';
import { HOST, PATH, QIMEN_METHOD, SANDBOX_HOST, QIMEN_SANDBOX_HOST, QIMEN_HOST } from './path';
import * as types from './types';

function sortObject<T extends Object>(obj: T) {
    const sort = {} as T;
    Object.keys(obj).sort().forEach(function (key) {
        if (![undefined, null, ''].includes(obj[key]))
            sort[key] = obj[key];
    });
    return sort;
}

function wdtSign(data: types.base.Base, appsecret: string) {
    data = sortObject(data);
    const arr: string[] = [];
    for (const k in data) {
        let kLen = `${Buffer.from(k).toString('utf-8').length}`;
        if (kLen.length < 2) {
            kLen = `00${kLen}`.substr(-2, 2);
        }
        let vLen = `${Buffer.from(String(data[k])).toString('utf-8').length}`;
        if (vLen.length < 4) {
            vLen = `0000${vLen}`.substr(-4, 4);
        }
        arr.push(`${kLen}-${k}:${vLen}-${String(data[k])}`);
    }
    const str = arr.join(';');
    return createHash('md5').update(str + appsecret).digest('hex').toLowerCase();
}

function qimenSign(data: types.base.Base, app_secret: string) {
    data = sortObject(data);
    let str = app_secret;
    for (const k in data) {
        str += `${k}${data[k]}`;
    }
    str += app_secret;
    return createHash('md5').update(str).digest('hex').toUpperCase();
}

function jsonData(data: types.base.Base) {
    for (const k in data) {
        if (isObject(data[k]) || isArray(data[k])) {
            data[k] = JSON.stringify(data[k]);
        }
    }
    return data;
}

function buildReqData(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (data: types.base.Base) {
        const { sid, appkey, appsecret, qimen, qimenOpt } = this as Wdt;
        if (qimen && qimenOpt) {
            data = jsonData({
                sid, app_key: qimenOpt.app_key, timestamp: format(new Date(), 'yyyy-MM-dd HH:mm:ss'), method: QIMEN_METHOD[propertyKey],
                target_app_key: qimenOpt.target_app_key, format: 'json', sign_method: 'md5', v: '2.0', ...data,
            });
            data.sign = qimenSign(data, qimenOpt.app_secret);
        } else {
            data = jsonData({ sid, appkey, timestamp: Math.round(new Date().getTime() / 1000), ...data });
            data.sign = wdtSign(data, appsecret);
        }
        return original.apply(this, [data]);
    }
}

function buildReqOptions(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (data: types.base.Base) {
        const { sandbox, qimen, qimenOpt } = this as Wdt;
        let options: AxiosRequestConfig = {};
        const dataArr: string[] = [];
        for (const k in data) {
            dataArr.push(`${k}=${encodeURI(data[k])}`);
        }
        const dataStr = dataArr.join('&');
        if (qimen && qimenOpt) {
            options = {
                url: (sandbox ? QIMEN_SANDBOX_HOST : QIMEN_HOST) + '?' + dataStr,
                method: 'POST',
            }
        } else {
            options = {
                url: (sandbox ? SANDBOX_HOST : HOST) + PATH[propertyKey],
                data: dataStr,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        }
        return original.apply(this, [options]);
    }
}

export class Wdt {

    readonly sid: string = '';
    readonly appkey: string = '';
    readonly appsecret: string = '';
    readonly sandbox: boolean = false;
    readonly qimen: boolean = false;
    readonly qimenOpt: { app_key: string, target_app_key: string, app_secret: string } | null = null;
    readonly log: boolean = false;
    readonly throwErr: boolean = false;

    constructor(opt: {
        sid: string, appkey: string, appsecret: string, sandbox?: boolean, qimen?: boolean,
        qimenOpt?: { app_key: string, target_app_key: string, app_secret: string }, log?: boolean, throwErr?: boolean,
    }) {
        this.sid = opt.sid || '';
        this.appkey = opt.appkey || '';
        this.appsecret = opt.appsecret || '';
        this.sandbox = opt.sandbox || false;
        this.qimen = opt.qimen || false;
        this.qimenOpt = opt.qimenOpt || null;
        this.log = opt.log || false;
        this.throwErr = opt.throwErr || false;
    }

    private async request<T = types.base.Base>(options: types.base.Base) {
        const res = await axios.request(options);
        if (this.log) {
            console.log('options:');
            console.log(JSON.stringify(options));
            console.log('response:');
            console.log(JSON.stringify(res.data));
        }
        if (this.throwErr) {
            if (!this.qimen && res.data.code !== 0) {
                throw new Error(res.data.message);
            }
            if (this.qimen && res.data.response.flag === 'failure') {
                throw new Error(res.data.response.sub_message);
            }
        }
        return (this.qimen ? res.data.response : res.data) as types.base.Base as T;
    }

    @buildReqData
    @buildReqOptions
    async shop(data: types.shop.Request = {}) {
        return await this.request<types.shop.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async warehouseQuery(data: types.warehouseQuery.Request = {}) {
        return await this.request<types.warehouseQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async logistics(data: types.logistics.Request = {}) {
        return await this.request<types.logistics.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseProviderQuery(data: types.purchaseProviderQuery.Request = {}) {
        return await this.request<types.purchaseProviderQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseProviderCreate(data: types.purchaseProviderCreate.Request = {}) {
        return await this.request<types.purchaseProviderCreate.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async goodsPush(data: types.goodsPush.Request & any = {}) {
        return await this.request<types.goodsPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async goodsQuery(data: types.goodsQuery.Request = {}) {
        return await this.request<types.goodsQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async apiGoodsspecPush(data: types.apiGoodsspecPush.Request = {}) {
        return await this.request<types.apiGoodsspecPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipApiGoodsQuery(data: types.vipApiGoodsQuery.Request = {}) {
        return await this.request<types.vipApiGoodsQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async suitesQuery(data: types.suitesQuery.Request = {}) {
        return await this.request<types.suitesQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async goodsClassQuery(data: types.goodsClassQuery.Request = {}) {
        return await this.request<types.goodsClassQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async tradePush(data: types.tradePush.Request = {}) {
        return await this.request<types.tradePush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async tradeQuery(data: types.tradeQuery.Request = {}) {
        return await this.request<types.tradeQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockoutOrderQueryTrade(data: types.stockoutOrderQueryTrade.Request = {}) {
        return await this.request<types.stockoutOrderQueryTrade.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async logisticsSyncQuery(data: types.logisticsSyncQuery.Request = {}) {
        return await this.request<types.logisticsSyncQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async logisticsSyncAck(data: types.logisticsSyncAck.Request = {}) {
        return await this.request<types.logisticsSyncAck.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async apiGoodsStockChangeQuery(data: types.apiGoodsStockChangeQuery.Request = {}) {
        return await this.request<types.apiGoodsStockChangeQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async apiGoodsStockChangeAck(data: types.apiGoodsStockChangeAck.Request = {}) {
        return await this.request<types.apiGoodsStockChangeAck.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipStatSalesBySpecShopWarehouseQuery(data: types.vipStatSalesBySpecShopWarehouseQuery.Request = {}) {
        return await this.request<types.vipStatSalesBySpecShopWarehouseQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipStockoutSalesWeightPush(data: types.vipStockoutSalesWeightPush.Request = {}) {
        return await this.request<types.vipStockoutSalesWeightPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipTradeModify(data: types.vipTradeModify.Request = {}) {
        return await this.request<types.vipTradeModify.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipApiTradeQuery(data: types.vipApiTradeQuery.Request = {}) {
        return await this.request<types.vipApiTradeQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipInvoiceInfoQuery(data: types.vipInvoiceInfoQuery.Request = {}) {
        return await this.request<types.vipInvoiceInfoQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipInvoiceInfoUpdate(data: types.vipInvoiceInfoUpdate.Request = {}) {
        return await this.request<types.vipInvoiceInfoUpdate.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async salesRefundPush(data: types.salesRefundPush.Request = {}) {
        return await this.request<types.salesRefundPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockinRefundPush(data: types.stockinRefundPush.Request = {}) {
        return await this.request<types.stockinRefundPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async refundQuery(data: types.refundQuery.Request = {}) {
        return await this.request<types.refundQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockinOrderQueryRefund(data: types.stockinOrderQueryRefund.Request = {}) {
        return await this.request<types.stockinOrderQueryRefund.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipStatRefundBySpecShopWarehouseQuery(data: types.vipStatRefundBySpecShopWarehouseQuery.Request = {}) {
        return await this.request<types.vipStatRefundBySpecShopWarehouseQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipApiRefundQuery(data: types.vipApiRefundQuery.Request = {}) {
        return await this.request<types.vipApiRefundQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseOrderPush(data: types.purchaseOrderPush.Request = {}) {
        return await this.request<types.purchaseOrderPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockinPurchasePush(data: types.stockinPurchasePush.Request = {}) {
        return await this.request<types.stockinPurchasePush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseOrderQuery(data: types.purchaseOrderQuery.Request = {}) {
        return await this.request<types.purchaseOrderQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockinOrderQueryPurchase(data: types.stockinOrderQueryPurchase.Request = {}) {
        return await this.request<types.stockinOrderQueryPurchase.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseReturnPush(data: types.purchaseReturnPush.Request = {}) {
        return await this.request<types.purchaseReturnPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseReturnOrderPush(data: types.purchaseReturnOrderPush.Request = {}) {
        return await this.request<types.purchaseReturnOrderPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseReturnQuery(data: types.purchaseReturnQuery.Request = {}) {
        return await this.request<types.purchaseReturnQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockoutOrderQueryReturn(data: types.stockoutOrderQueryReturn.Request = {}) {
        return await this.request<types.stockoutOrderQueryReturn.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async purchaseApplyQuery(data: types.purchaseApplyQuery.Request = {}) {
        return await this.request<types.purchaseApplyQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockQuery(data: types.stockQuery.Request = {}) {
        return await this.request<types.stockQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockSyncByPd(data: types.stockSyncByPd.Request = {}) {
        return await this.request<types.stockSyncByPd.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockPdOrderQuery(data: types.stockPdOrderQuery.Request = {}) {
        return await this.request<types.stockPdOrderQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockinOrderPush(data: types.stockinOrderPush.Request = {}) {
        return await this.request<types.stockinOrderPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockinOrderQuery(data: types.stockinOrderQuery.Request = {}) {
        return await this.request<types.stockinOrderQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockoutOrderPush(data: types.stockoutOrderPush.Request = {}) {
        return await this.request<types.stockoutOrderPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockoutOrderQuery(data: types.stockoutOrderQuery.Request = {}) {
        return await this.request<types.stockoutOrderQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockTransferPush(data: types.stockTransferPush.Request = {}) {
        return await this.request<types.stockTransferPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockoutTransferPush(data: types.stockoutTransferPush.Request = {}) {
        return await this.request<types.stockoutTransferPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockinTransferPush(data: types.stockinTransferPush.Request = {}) {
        return await this.request<types.stockinTransferPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async stockTransferQuery(data: types.stockTransferQuery.Request = {}) {
        return await this.request<types.stockTransferQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipStockQueryAll(data: types.vipStockQueryAll.Request = {}) {
        return await this.request<types.vipStockQueryAll.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipWmsStockinoutOrderPush(data: types.vipWmsStockinoutOrderPush.Request = {}) {
        return await this.request<types.vipWmsStockinoutOrderPush.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipStockOutsideWmsQuery(data: types.vipStockOutsideWmsQuery.Request = {}) {
        return await this.request<types.vipStockOutsideWmsQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipJitReturnStockinOrderQuery(data: types.vipJitReturnStockinOrderQuery.Request = {}) {
        return await this.request<types.vipJitReturnStockinOrderQuery.Response>(data);
    }

    @buildReqData
    @buildReqOptions
    async vipJitStockoutOrderQuery(data: types.vipJitStockoutOrderQuery.Request = {}) {
        return await this.request<types.vipJitStockoutOrderQuery.Response>(data);
    }

}

