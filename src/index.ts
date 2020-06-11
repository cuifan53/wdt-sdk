import { Request } from './base/base';
import { basic, goods, trade, refund, purchase, stock } from './base';
import { getTimestamp, request, sign } from './base/utils';

const HOST = 'http://api.wangdian.cn/openapi2';
const SANDBOX_HOST = 'http://sandbox.wangdian.cn/openapi2';

function buildReqData(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (data: Request) {
        const { sid, appkey, appsecret } = this as Wdt;
        data = { ...data, sid: sid, appkey: appkey, timestamp: getTimestamp() };
        data.sign = sign(data, appsecret);
        return original.apply(this, [data]);
    }
}

export class Wdt {

    host = '';
    sid: string = '';
    appkey: string = '';
    appsecret: string = '';

    constructor(opt: { sid: string, appkey: string, appsecret: string, sandbox?: boolean }) {
        this.sid = opt.sid;
        this.appkey = opt.appkey;
        this.appsecret = opt.appsecret;
        this.host = opt.sandbox ? SANDBOX_HOST : HOST;
    }

    @buildReqData
    async shop(data: basic.shop.Request) {
        return await request<basic.shop.Response>(this.host + basic.shop.path, data);
    }

    @buildReqData
    async warehouseQuery(data: basic.warehouseQuery.Request) {
        return await request<basic.warehouseQuery.Response>(this.host + basic.warehouseQuery.path, data);
    }

    @buildReqData
    async logistics(data: basic.logistics.Request) {
        return await request<basic.logistics.Response>(this.host + basic.logistics.path, data);
    }

    @buildReqData
    async purchaseProviderQuery(data: basic.purchaseProviderQuery.Request) {
        return await request<basic.purchaseProviderQuery.Response>(this.host + basic.purchaseProviderQuery.path, data);
    }

    @buildReqData
    async purchaseProviderCreate(data: basic.purchaseProviderCreate.Request) {
        return await request<basic.purchaseProviderCreate.Response>(this.host + basic.purchaseProviderCreate.path, data);
    }

    @buildReqData
    async goodsPush(data: goods.goodsPush.Request) {
        return await request<goods.goodsPush.Response>(this.host + goods.goodsPush.path, data);
    }

    @buildReqData
    async goodsQuery(data: goods.goodsQuery.Request) {
        return await request<goods.goodsQuery.Response>(this.host + goods.goodsQuery.path, data);
    }

    @buildReqData
    async apiGoodsspecPush(data: goods.apiGoodsspecPush.Request) {
        return await request<goods.apiGoodsspecPush.Response>(this.host + goods.apiGoodsspecPush.path, data);
    }

    @buildReqData
    async vipApiGoodsQuery(data: goods.vipApiGoodsQuery.Request) {
        return await request<goods.vipApiGoodsQuery.Response>(this.host + goods.vipApiGoodsQuery.path, data);
    }

    @buildReqData
    async suitesQuery(data: goods.suitesQuery.Request) {
        return await request<goods.suitesQuery.Response>(this.host + goods.suitesQuery.path, data);
    }

    @buildReqData
    async goodsClassQuery(data: goods.goodsClassQuery.Request) {
        return await request<goods.goodsClassQuery.Response>(this.host + goods.goodsClassQuery.path, data);
    }

    @buildReqData
    async tradePush(data: trade.tradePush.Request) {
        return await request<trade.tradePush.Response>(this.host + trade.tradePush.path, data);
    }

    @buildReqData
    async tradeQuery(data: trade.tradeQuery.Request) {
        return await request<trade.tradeQuery.Response>(this.host + trade.tradeQuery.path, data);
    }

    @buildReqData
    async stockoutOrderQueryTrade(data: trade.stockoutOrderQueryTrade.Request) {
        return await request<trade.stockoutOrderQueryTrade.Response>(this.host + trade.stockoutOrderQueryTrade.path, data);
    }

    @buildReqData
    async logisticsSyncQuery(data: trade.logisticsSyncQuery.Request) {
        return await request<trade.logisticsSyncQuery.Response>(this.host + trade.logisticsSyncQuery.path, data);
    }

    @buildReqData
    async logisticsSyncAck(data: trade.logisticsSyncAck.Request) {
        return await request<trade.logisticsSyncAck.Response>(this.host + trade.logisticsSyncAck.path, data);
    }

    @buildReqData
    async apiGoodsStockChangeQuery(data: trade.apiGoodsStockChangeQuery.Request) {
        return await request<trade.apiGoodsStockChangeQuery.Response>(this.host + trade.apiGoodsStockChangeQuery.path, data);
    }

    @buildReqData
    async apiGoodsStockChangeAck(data: trade.apiGoodsStockChangeAck.Request) {
        return await request<trade.apiGoodsStockChangeAck.Response>(this.host + trade.apiGoodsStockChangeAck.path, data);
    }

    @buildReqData
    async vipStatSalesBySpecShopWarehouseQuery(data: trade.vipStatSalesBySpecShopWarehouseQuery.Request) {
        return await request<trade.vipStatSalesBySpecShopWarehouseQuery.Response>(this.host + trade.vipStatSalesBySpecShopWarehouseQuery.path, data);
    }

    @buildReqData
    async vipStockoutSalesWeightPush(data: trade.vipStockoutSalesWeightPush.Request) {
        return await request<trade.vipStockoutSalesWeightPush.Response>(this.host + trade.vipStockoutSalesWeightPush.path, data);
    }

    @buildReqData
    async vipTradeModify(data: trade.vipTradeModify.Request) {
        return await request<trade.vipTradeModify.Response>(this.host + trade.vipTradeModify.path, data);
    }

    @buildReqData
    async vipApiTradeQuery(data: trade.vipApiTradeQuery.Request) {
        return await request<trade.vipApiTradeQuery.Response>(this.host + trade.vipApiTradeQuery.path, data);
    }

    @buildReqData
    async vipInvoiceInfoQuery(data: trade.vipInvoiceInfoQuery.Request) {
        return await request<trade.vipInvoiceInfoQuery.Response>(this.host + trade.vipInvoiceInfoQuery.path, data);
    }

    @buildReqData
    async vipInvoiceInfoUpdate(data: trade.vipInvoiceInfoUpdate.Request) {
        return await request<trade.vipInvoiceInfoUpdate.Response>(this.host + trade.vipInvoiceInfoUpdate.path, data);
    }

    @buildReqData
    async salesRefundPush(data: refund.salesRefundPush.Request) {
        return await request<refund.salesRefundPush.Response>(this.host + refund.salesRefundPush.path, data);
    }

    @buildReqData
    async stockinRefundPush(data: refund.stockinRefundPush.Request) {
        return await request<refund.stockinRefundPush.Response>(this.host + refund.stockinRefundPush.path, data);
    }

    @buildReqData
    async refundQuery(data: refund.refundQuery.Request) {
        return await request<refund.refundQuery.Response>(this.host + refund.refundQuery.path, data);
    }

    @buildReqData
    async stockinOrderQueryRefund(data: refund.stockinOrderQueryRefund.Request) {
        return await request<refund.stockinOrderQueryRefund.Response>(this.host + refund.stockinOrderQueryRefund.path, data);
    }

    @buildReqData
    async vipStatRefundBySpecShopWarehouseQuery(data: refund.vipStatRefundBySpecShopWarehouseQuery.Request) {
        return await request<refund.vipStatRefundBySpecShopWarehouseQuery.Response>(this.host + refund.vipStatRefundBySpecShopWarehouseQuery.path, data);
    }

    @buildReqData
    async vipApiRefundQuery(data: refund.vipApiRefundQuery.Request) {
        return await request<refund.vipApiRefundQuery.Response>(this.host + refund.vipApiRefundQuery.path, data);
    }

    @buildReqData
    async purchaseOrderPush(data: purchase.purchaseOrderPush.Request) {
        return await request<purchase.purchaseOrderPush.Response>(this.host + purchase.purchaseOrderPush.path, data);
    }

    @buildReqData
    async stockinPurchasePush(data: purchase.stockinPurchasePush.Request) {
        return await request<purchase.stockinPurchasePush.Response>(this.host + purchase.stockinPurchasePush.path, data);
    }

    @buildReqData
    async purchaseOrderQuery(data: purchase.purchaseOrderQuery.Request) {
        return await request<purchase.purchaseOrderQuery.Response>(this.host + purchase.purchaseOrderQuery.path, data);
    }

    @buildReqData
    async stockinOrderQueryPurchase(data: purchase.stockinOrderQueryPurchase.Request) {
        return await request<purchase.stockinOrderQueryPurchase.Response>(this.host + purchase.stockinOrderQueryPurchase.path, data);
    }

    @buildReqData
    async purchaseReturnPush(data: purchase.purchaseReturnPush.Request) {
        return await request<purchase.purchaseReturnPush.Response>(this.host + purchase.purchaseReturnPush.path, data);
    }

    @buildReqData
    async purchaseReturnOrderPush(data: purchase.purchaseReturnOrderPush.Request) {
        return await request<purchase.purchaseReturnOrderPush.Response>(this.host + purchase.purchaseReturnOrderPush.path, data);
    }

    @buildReqData
    async purchaseReturnQuery(data: purchase.purchaseReturnQuery.Request) {
        return await request<purchase.purchaseReturnQuery.Response>(this.host + purchase.purchaseReturnQuery.path, data);
    }

    @buildReqData
    async stockoutOrderQueryReturn(data: purchase.stockoutOrderQueryReturn.Request) {
        return await request<purchase.stockoutOrderQueryReturn.Response>(this.host + purchase.stockoutOrderQueryReturn.path, data);
    }

    @buildReqData
    async purchaseApplyQuery(data: purchase.purchaseApplyQuery.Request) {
        return await request<purchase.purchaseApplyQuery.Response>(this.host + purchase.purchaseApplyQuery.path, data);
    }

    @buildReqData
    async stockQuery(data: stock.stockQuery.Request) {
        return await request<stock.stockQuery.Response>(this.host + stock.stockQuery.path, data);
    }

    @buildReqData
    async stockSyncByPd(data: stock.stockSyncByPd.Request) {
        return await request<stock.stockSyncByPd.Response>(this.host + stock.stockSyncByPd.path, data);
    }

    @buildReqData
    async stockPdOrderQuery(data: stock.stockPdOrderQuery.Request) {
        return await request<stock.stockPdOrderQuery.Response>(this.host + stock.stockPdOrderQuery.path, data);
    }

    @buildReqData
    async stockinOrderPush(data: stock.stockinOrderPush.Request) {
        return await request<stock.stockinOrderPush.Response>(this.host + stock.stockinOrderPush.path, data);
    }

    @buildReqData
    async stockinOrderQuery(data: stock.stockinOrderQuery.Request) {
        return await request<stock.stockinOrderQuery.Response>(this.host + stock.stockinOrderQuery.path, data);
    }

    @buildReqData
    async stockoutOrderPush(data: stock.stockoutOrderPush.Request) {
        return await request<stock.stockoutOrderPush.Response>(this.host + stock.stockoutOrderPush.path, data);
    }

    @buildReqData
    async stockoutOrderQuery(data: stock.stockoutOrderQuery.Request) {
        return await request<stock.stockoutOrderQuery.Response>(this.host + stock.stockoutOrderQuery.path, data);
    }

    @buildReqData
    async stockTransferPush(data: stock.stockTransferPush.Request) {
        return await request<stock.stockTransferPush.Response>(this.host + stock.stockTransferPush.path, data);
    }

    @buildReqData
    async stockoutTransferPush(data: stock.stockoutTransferPush.Request) {
        return await request<stock.stockoutTransferPush.Response>(this.host + stock.stockoutTransferPush.path, data);
    }

    @buildReqData
    async stockinTransferPush(data: stock.stockinTransferPush.Request) {
        return await request<stock.stockinTransferPush.Response>(this.host + stock.stockinTransferPush.path, data);
    }

    @buildReqData
    async stockTransferQuery(data: stock.stockTransferQuery.Request) {
        return await request<stock.stockTransferQuery.Response>(this.host + stock.stockTransferQuery.path, data);
    }

    @buildReqData
    async vipStockQueryAll(data: stock.vipStockQueryAll.Request) {
        return await request<stock.vipStockQueryAll.Response>(this.host + stock.vipStockQueryAll.path, data);
    }

    @buildReqData
    async vipWmsStockinoutOrderPush(data: stock.vipWmsStockinoutOrderPush.Request) {
        return await request<stock.vipWmsStockinoutOrderPush.Response>(this.host + stock.vipWmsStockinoutOrderPush.path, data);
    }

    @buildReqData
    async vipStockOutsideWmsQuery(data: stock.vipStockOutsideWmsQuery.Request) {
        return await request<stock.vipStockOutsideWmsQuery.Response>(this.host + stock.vipStockOutsideWmsQuery.path, data);
    }

    @buildReqData
    async vipJitReturnStockinOrderQuery(data: stock.vipJitReturnStockinOrderQuery.Request) {
        return await request<stock.vipJitReturnStockinOrderQuery.Response>(this.host + stock.vipJitReturnStockinOrderQuery.path, data);
    }

    @buildReqData
    async vipJitStockoutOrderQuery(data: stock.vipJitStockoutOrderQuery.Request) {
        return await request<stock.vipJitStockoutOrderQuery.Response>(this.host + stock.vipJitStockoutOrderQuery.path, data);
    }

}

