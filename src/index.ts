import axios, { AxiosRequestConfig } from 'axios';
import { createHash } from 'crypto';
import { HOST, PATH, SANDBOX_HOST } from './path';
import * as types from './types';

function sortObject<T extends Object>(obj: T) {
    const sort = {} as T;
    Object.keys(obj).sort().forEach(function (key) {
        if (![undefined, null, ''].includes(obj[key]))
            sort[key] = obj[key];
    });
    return sort;
}

function wdtEncrypt(k: string, v: string) {
    let kLen = `${Buffer.from(k).toString('utf-8').length}`;
    if (kLen.length < 2) {
        kLen = `00${kLen}`.substr(-2, 2);
    }
    let vLen = `${Buffer.from(v).toString('utf-8').length}`;
    if (vLen.length < 4) {
        vLen = `0000${vLen}`.substr(-4, 4);
    }
    return `${kLen}-${k}:${vLen}-${v}`;
}

function wdtSign(data: types.base.Base, appsecret: string) {
    data = sortObject(data);
    const arr: string[] = [];
    for (const k in data) {
        arr.push(wdtEncrypt(k, String(data[k])));
    }
    const str = arr.join(';');
    return createHash('md5').update(str + appsecret).digest('hex').toLowerCase();
}

function qimenSign(data: types.base.Base, app_secret: string) {
    data = sortObject(data);
    const arr: string[] = [app_secret];
    for (const k in data) {
        arr.push(`${k}${data[k]}`);
    }
}

export class Wdt {

    private sid: string = '';
    private appkey: string = '';
    private appsecret: string = '';
    private sandbox: boolean = false;
    private qimen: boolean = false;
    private qimenOpt: { sid?: string, app_key?: string, target_app_key?: string } | null = null;

    constructor(opt: {
        sid?: string, appkey?: string, appsecret?: string, sandbox?: boolean, qimen?: boolean,
        qimenOpt?: { sid?: string, app_key?: string, app_secret?: string, target_app_key?: string },
    }) {
        this.sid = opt.sid || '';
        this.appkey = opt.appkey || '';
        this.appsecret = opt.appsecret || '';
        this.sandbox = opt.sandbox || false;
        this.qimen = opt.qimen || false;
        this.qimenOpt = opt.qimenOpt || null;
    }

    private async request<T = types.base.Base>(path: { path: string, qimenMethod: string }, data: types.base.Base) {
        return this.qimen ? await this.qimenRequest<T>(path.qimenMethod, data) : await this.wdtRequest<T>(path.path, data);
    }

    private async wdtRequest<T = types.base.Base>(path: string, data: types.base.Base) {
        data = {
            sid: this.sid,
            appkey: this.appkey,
            timestamp: Math.round(new Date().getTime() / 1000),
            ...data,
        };
        data.sign = wdtSign(data, this.appsecret);
        const dataArr: string[] = [];
        for (const k in data) {
            dataArr.push(`${k}=${encodeURI(data[k])}`);
        }
        const dataStr = dataArr.join('&');
        const options: AxiosRequestConfig = {
            url: this.sandbox ? SANDBOX_HOST : HOST + path,
            data: dataStr,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
        console.log(options)
        const res = await axios.request(options);
        return res.data as types.base.Base as T;
    }

    private async qimenRequest<T = types.base.Base>(method: string, data: types.base.Base) {
        return data as types.base.Base as T;
    }

    async shop(data: types.shop.Request) {
        return await this.request<types.shop.Response>(PATH.SHOP, data);
    }

    async warehouseQuery(data: types.warehouseQuery.Request) {
        return await this.request<types.warehouseQuery.Response>(PATH.WAREHOUSE_QUERY, data);
    }

    async logistics(data: types.logistics.Request) {
        return await this.request<types.logistics.Response>(PATH.LOGISTICS, data);
    }

    async purchaseProviderQuery(data: types.purchaseProviderQuery.Request) {
        return await this.request<types.purchaseProviderQuery.Response>(PATH.PURCHASE_PROVIDER_QUERY, data);
    }

    async purchaseProviderCreate(data: types.purchaseProviderCreate.Request) {
        return await this.request<types.purchaseProviderCreate.Response>(PATH.PURCHASE_PROVIDER_CREATE, data);
    }

    async goodsPush(data: types.goodsPush.Request) {
        return await this.request<types.goodsPush.Response>(PATH.GOODS_PUSH, data);
    }

    async goodsQuery(data: types.goodsQuery.Request) {
        return await this.request<types.goodsQuery.Response>(PATH.GOODS_QUERY, data);
    }

    async apiGoodsspecPush(data: types.apiGoodsspecPush.Request) {
        return await this.request<types.apiGoodsspecPush.Response>(PATH.API_GOODSSPEC_PUSH, data);
    }

    async vipApiGoodsQuery(data: types.vipApiGoodsQuery.Request) {
        return await this.request<types.vipApiGoodsQuery.Response>(PATH.VIP_API_GOODS_QUERY, data);
    }

    async suitesQuery(data: types.suitesQuery.Request) {
        return await this.request<types.suitesQuery.Response>(PATH.SUITES_QUERY, data);
    }

    async goodsClassQuery(data: types.goodsClassQuery.Request) {
        return await this.request<types.goodsClassQuery.Response>(PATH.GOODS_CLASS_QUERY, data);
    }

    async tradePush(data: types.tradePush.Request) {
        return await this.request<types.tradePush.Response>(PATH.TRADE_PUSH, data);
    }

    async tradeQuery(data: types.tradeQuery.Request) {
        return await this.request<types.tradeQuery.Response>(PATH.TRADE_QUERY, data);
    }

    async stockoutOrderQueryTrade(data: types.stockoutOrderQueryTrade.Request) {
        return await this.request<types.stockoutOrderQueryTrade.Response>(PATH.STOCKOUT_ORDER_QUERY_TRADE, data);
    }

    async logisticsSyncQuery(data: types.logisticsSyncQuery.Request) {
        return await this.request<types.logisticsSyncQuery.Response>(PATH.LOGISTICS_SYNC_QUERY, data);
    }

    async logisticsSyncAck(data: types.logisticsSyncAck.Request) {
        return await this.request<types.logisticsSyncAck.Response>(PATH.LOGISTICS_SYNC_ACK, data);
    }

    async apiGoodsStockChangeQuery(data: types.apiGoodsStockChangeQuery.Request) {
        return await this.request<types.apiGoodsStockChangeQuery.Response>(PATH.API_GOODS_STOCK_CHANGE_QUERY, data);
    }

    async apiGoodsStockChangeAck(data: types.apiGoodsStockChangeAck.Request) {
        return await this.request<types.apiGoodsStockChangeAck.Response>(PATH.API_GOODS_STOCK_CHANGE_ACK, data);
    }

    async vipStatSalesBySpecShopWarehouseQuery(data: types.vipStatSalesBySpecShopWarehouseQuery.Request) {
        return await this.request<types.vipStatSalesBySpecShopWarehouseQuery.Response>(PATH.VIP_STAT_SALES_BY_SPEC_SHOP_WAREHOUSE_QUERY, data);
    }

    async vipStockoutSalesWeightPush(data: types.vipStockoutSalesWeightPush.Request) {
        return await this.request<types.vipStockoutSalesWeightPush.Response>(PATH.VIP_STOCKOUT_SALES_WEIGHT_PUSH, data);
    }

    async vipTradeModify(data: types.vipTradeModify.Request) {
        return await this.request<types.vipTradeModify.Response>(PATH.VIP_TRADE_MODIFY, data);
    }

    async vipApiTradeQuery(data: types.vipApiTradeQuery.Request) {
        return await this.request<types.vipApiTradeQuery.Response>(PATH.VIP_API_TRADE_QUERY, data);
    }

    async vipInvoiceInfoQuery(data: types.vipInvoiceInfoQuery.Request) {
        return await this.request<types.vipInvoiceInfoQuery.Response>(PATH.VIP_INVOICE_INFO_QUERY, data);
    }

    async vipInvoiceInfoUpdate(data: types.vipInvoiceInfoUpdate.Request) {
        return await this.request<types.vipInvoiceInfoUpdate.Response>(PATH.VIP_INVOICE_INFO_UPDATE, data);
    }

    async salesRefundPush(data: types.salesRefundPush.Request) {
        return await this.request<types.salesRefundPush.Response>(PATH.SALES_REFUND_PUSH, data);
    }

    async stockinRefundPush(data: types.stockinRefundPush.Request) {
        return await this.request<types.stockinRefundPush.Response>(PATH.STOCKIN_REFUND_PUSH, data);
    }

    async refundQuery(data: types.refundQuery.Request) {
        return await this.request<types.refundQuery.Response>(PATH.REFUND_QUERY, data);
    }

    async stockinOrderQueryRefund(data: types.stockinOrderQueryRefund.Request) {
        return await this.request<types.stockinOrderQueryRefund.Response>(PATH.STOCKIN_ORDER_QUERY_REFUND, data);
    }

    async vipStatRefundBySpecShopWarehouseQuery(data: types.vipStatRefundBySpecShopWarehouseQuery.Request) {
        return await this.request<types.vipStatRefundBySpecShopWarehouseQuery.Response>(PATH.VIP_STAT_REFUND_BY_SPEC_SHOP_WAREHOUSE_QUERY, data);
    }

    async vipApiRefundQuery(data: types.vipApiRefundQuery.Request) {
        return await this.request<types.vipApiRefundQuery.Response>(PATH.VIP_API_REFUND_QUERY, data);
    }

    async purchaseOrderPush(data: types.purchaseOrderPush.Request) {
        return await this.request<types.purchaseOrderPush.Response>(PATH.PURCHASE_ORDER_PUSH, data);
    }

    async stockinPurchasePush(data: types.stockinPurchasePush.Request) {
        return await this.request<types.stockinPurchasePush.Response>(PATH.STOCKIN_PURCHASE_PUSH, data);
    }

    async purchaseOrderQuery(data: types.purchaseOrderQuery.Request) {
        return await this.request<types.purchaseOrderQuery.Response>(PATH.PURCHASE_ORDER_QUERY, data);
    }

    async stockinOrderQueryPurchase(data: types.stockinOrderQueryPurchase.Request) {
        return await this.request<types.stockinOrderQueryPurchase.Response>(PATH.STOCKIN_ORDER_QUERY_PURCHASE, data);
    }

    async purchaseReturnPush(data: types.purchaseReturnPush.Request) {
        return await this.request<types.purchaseReturnPush.Response>(PATH.PURCHASE_RETURN_PUSH, data);
    }

    async purchaseReturnOrderPush(data: types.purchaseReturnOrderPush.Request) {
        return await this.request<types.purchaseReturnOrderPush.Response>(PATH.PURCHASE_RETURN_ORDER_PUSH, data);
    }

    async purchaseReturnQuery(data: types.purchaseReturnQuery.Request) {
        return await this.request<types.purchaseReturnQuery.Response>(PATH.PURCHASE_RETURN_QUERY, data);
    }

    async stockoutOrderQueryReturn(data: types.stockoutOrderQueryReturn.Request) {
        return await this.request<types.stockoutOrderQueryReturn.Response>(PATH.STOCKOUT_ORDER_QUERY_RETURN, data);
    }

    async purchaseApplyQuery(data: types.purchaseApplyQuery.Request) {
        return await this.request<types.purchaseApplyQuery.Response>(PATH.PURCHASE_APPLY_QUERY, data);
    }

    async stockQuery(data: types.stockQuery.Request) {
        return await this.request<types.stockQuery.Response>(PATH.STOCK_QUERY, data);
    }

    async stockSyncByPd(data: types.stockSyncByPd.Request) {
        return await this.request<types.stockSyncByPd.Response>(PATH.STOCK_SYNC_BY_PD, data);
    }

    async stockPdOrderQuery(data: types.stockPdOrderQuery.Request) {
        return await this.request<types.stockPdOrderQuery.Response>(PATH.STOCK_PD_ORDER_QUERY, data);
    }

    async stockinOrderPush(data: types.stockinOrderPush.Request) {
        return await this.request<types.stockinOrderPush.Response>(PATH.STOCKIN_ORDER_PUSH, data);
    }

    async stockinOrderQuery(data: types.stockinOrderQuery.Request) {
        return await this.request<types.stockinOrderQuery.Response>(PATH.STOCKIN_ORDER_QUERY, data);
    }

    async stockoutOrderPush(data: types.stockoutOrderPush.Request) {
        return await this.request<types.stockoutOrderPush.Response>(PATH.STOCKOUT_ORDER_PUSH, data);
    }

    async stockoutOrderQuery(data: types.stockoutOrderQuery.Request) {
        return await this.request<types.stockoutOrderQuery.Response>(PATH.STOCKOUT_ORDER_QUERY, data);
    }

    async stockTransferPush(data: types.stockTransferPush.Request) {
        return await this.request<types.stockTransferPush.Response>(PATH.STOCK_TRANSFER_PUSH, data);
    }

    async stockoutTransferPush(data: types.stockoutTransferPush.Request) {
        return await this.request<types.stockoutTransferPush.Response>(PATH.STOCKOUT_TRANSFER_PUSH, data);
    }

    async stockinTransferPush(data: types.stockinTransferPush.Request) {
        return await this.request<types.stockinTransferPush.Response>(PATH.STOCKIN_TRANSFER_PUSH, data);
    }

    async stockTransferQuery(data: types.stockTransferQuery.Request) {
        return await this.request<types.stockTransferQuery.Response>(PATH.STOCK_TRANSFER_QUERY, data);
    }

    async vipStockQueryAll(data: types.vipStockQueryAll.Request) {
        return await this.request<types.vipStockQueryAll.Response>(PATH.VIP_STOCK_QUERY_ALL, data);
    }

    async vipWmsStockinoutOrderPush(data: types.vipWmsStockinoutOrderPush.Request) {
        return await this.request<types.vipWmsStockinoutOrderPush.Response>(PATH.VIP_WMS_STOCKINOUT_ORDER_PUSH, data);
    }

    async vipStockOutsideWmsQuery(data: types.vipStockOutsideWmsQuery.Request) {
        return await this.request<types.vipStockOutsideWmsQuery.Response>(PATH.VIP_STOCK_OUTSIDE_WMS_QUERY, data);
    }

    async vipJitReturnStockinOrderQuery(data: types.vipJitReturnStockinOrderQuery.Request) {
        return await this.request<types.vipJitReturnStockinOrderQuery.Response>(PATH.VIP_JIT_RETURN_STOCKIN_ORDER_QUERY, data);
    }

    async vipJitStockoutOrderQuery(data: types.vipJitStockoutOrderQuery.Request) {
        return await this.request<types.vipJitStockoutOrderQuery.Response>(PATH.VIP_JIT_STOCKOUT_ORDER_QUERY, data);
    }

}

