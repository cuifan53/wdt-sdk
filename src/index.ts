import * as PATH from './path';
import * as types from './types';
import { Request } from './types/base';
import { request, sign } from './utils';

function buildReqData(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (data: Request) {
        const { sid, appkey, appsecret } = this as Wdt;
        const timestamp = Math.round(new Date().getTime() / 1000);
        data = { ...data, sid: sid, appkey: appkey, timestamp };
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
        this.host = opt.sandbox ? PATH.SANDBOX_HOST : PATH.HOST;
    }

    @buildReqData
    async shop(data: types.shop.Request) {
        return await request<types.shop.Response>(this.host + PATH.SHOP, data);
    }

    @buildReqData
    async warehouseQuery(data: types.warehouseQuery.Request) {
        return await request<types.warehouseQuery.Response>(this.host + PATH.WAREHOUSE_QUERY, data);
    }

    @buildReqData
    async logistics(data: types.logistics.Request) {
        return await request<types.logistics.Response>(this.host + PATH.LOGISTICS, data);
    }

    @buildReqData
    async purchaseProviderQuery(data: types.purchaseProviderQuery.Request) {
        return await request<types.purchaseProviderQuery.Response>(this.host + PATH.PURCHASE_PROVIDER_QUERY, data);
    }

    @buildReqData
    async purchaseProviderCreate(data: types.purchaseProviderCreate.Request) {
        return await request<types.purchaseProviderCreate.Response>(this.host + PATH.PURCHASE_PROVIDER_CREATE, data);
    }

    @buildReqData
    async goodsPush(data: types.goodsPush.Request) {
        return await request<types.goodsPush.Response>(this.host + PATH.GOODS_PUSH, data);
    }

    @buildReqData
    async goodsQuery(data: types.goodsQuery.Request) {
        return await request<types.goodsQuery.Response>(this.host + PATH.GOODS_QUERY, data);
    }

    @buildReqData
    async apiGoodsspecPush(data: types.apiGoodsspecPush.Request) {
        return await request<types.apiGoodsspecPush.Response>(this.host + PATH.API_GOODSSPEC_PUSH, data);
    }

    @buildReqData
    async vipApiGoodsQuery(data: types.vipApiGoodsQuery.Request) {
        return await request<types.vipApiGoodsQuery.Response>(this.host + PATH.VIP_API_GOODS_QUERY, data);
    }

    @buildReqData
    async suitesQuery(data: types.suitesQuery.Request) {
        return await request<types.suitesQuery.Response>(this.host + PATH.SUITES_QUERY, data);
    }

    @buildReqData
    async goodsClassQuery(data: types.goodsClassQuery.Request) {
        return await request<types.goodsClassQuery.Response>(this.host + PATH.GOODS_CLASS_QUERY, data);
    }

    @buildReqData
    async tradePush(data: types.tradePush.Request) {
        return await request<types.tradePush.Response>(this.host + PATH.TRADE_PUSH, data);
    }

    @buildReqData
    async tradeQuery(data: types.tradeQuery.Request) {
        return await request<types.tradeQuery.Response>(this.host + PATH.TRADE_QUERY, data);
    }

    @buildReqData
    async stockoutOrderQueryTrade(data: types.stockoutOrderQueryTrade.Request) {
        return await request<types.stockoutOrderQueryTrade.Response>(this.host + PATH.STOCKOUT_ORDER_QUERY_TRADE, data);
    }

    @buildReqData
    async logisticsSyncQuery(data: types.logisticsSyncQuery.Request) {
        return await request<types.logisticsSyncQuery.Response>(this.host + PATH.LOGISTICS_SYNC_QUERY, data);
    }

    @buildReqData
    async logisticsSyncAck(data: types.logisticsSyncAck.Request) {
        return await request<types.logisticsSyncAck.Response>(this.host + PATH.LOGISTICS_SYNC_ACK, data);
    }

    @buildReqData
    async apiGoodsStockChangeQuery(data: types.apiGoodsStockChangeQuery.Request) {
        return await request<types.apiGoodsStockChangeQuery.Response>(this.host + PATH.API_GOODS_STOCK_CHANGE_QUERY, data);
    }

    @buildReqData
    async apiGoodsStockChangeAck(data: types.apiGoodsStockChangeAck.Request) {
        return await request<types.apiGoodsStockChangeAck.Response>(this.host + PATH.API_GOODS_STOCK_CHANGE_ACK, data);
    }

    @buildReqData
    async vipStatSalesBySpecShopWarehouseQuery(data: types.vipStatSalesBySpecShopWarehouseQuery.Request) {
        return await request<types.vipStatSalesBySpecShopWarehouseQuery.Response>(this.host + PATH.VIP_STAT_SALES_BY_SPEC_SHOP_WAREHOUSE_QUERY, data);
    }

    @buildReqData
    async vipStockoutSalesWeightPush(data: types.vipStockoutSalesWeightPush.Request) {
        return await request<types.vipStockoutSalesWeightPush.Response>(this.host + PATH.VIP_STOCKOUT_SALES_WEIGHT_PUSH, data);
    }

    @buildReqData
    async vipTradeModify(data: types.vipTradeModify.Request) {
        return await request<types.vipTradeModify.Response>(this.host + PATH.VIP_TRADE_MODIFY, data);
    }

    @buildReqData
    async vipApiTradeQuery(data: types.vipApiTradeQuery.Request) {
        return await request<types.vipApiTradeQuery.Response>(this.host + PATH.VIP_API_TRADE_QUERY, data);
    }

    @buildReqData
    async vipInvoiceInfoQuery(data: types.vipInvoiceInfoQuery.Request) {
        return await request<types.vipInvoiceInfoQuery.Response>(this.host + PATH.VIP_INVOICE_INFO_QUERY, data);
    }

    @buildReqData
    async vipInvoiceInfoUpdate(data: types.vipInvoiceInfoUpdate.Request) {
        return await request<types.vipInvoiceInfoUpdate.Response>(this.host + PATH.VIP_INVOICE_INFO_UPDATE, data);
    }

    @buildReqData
    async salesRefundPush(data: types.salesRefundPush.Request) {
        return await request<types.salesRefundPush.Response>(this.host + PATH.SALES_REFUND_PUSH, data);
    }

    @buildReqData
    async stockinRefundPush(data: types.stockinRefundPush.Request) {
        return await request<types.stockinRefundPush.Response>(this.host + PATH.STOCKIN_REFUND_PUSH, data);
    }

    @buildReqData
    async refundQuery(data: types.refundQuery.Request) {
        return await request<types.refundQuery.Response>(this.host + PATH.REFUND_QUERY, data);
    }

    @buildReqData
    async stockinOrderQueryRefund(data: types.stockinOrderQueryRefund.Request) {
        return await request<types.stockinOrderQueryRefund.Response>(this.host + PATH.STOCKIN_ORDER_QUERY_REFUND, data);
    }

    @buildReqData
    async vipStatRefundBySpecShopWarehouseQuery(data: types.vipStatRefundBySpecShopWarehouseQuery.Request) {
        return await request<types.vipStatRefundBySpecShopWarehouseQuery.Response>(this.host + PATH.VIP_STAT_REFUND_BY_SPEC_SHOP_WAREHOUSE_QUERY, data);
    }

    @buildReqData
    async vipApiRefundQuery(data: types.vipApiRefundQuery.Request) {
        return await request<types.vipApiRefundQuery.Response>(this.host + PATH.VIP_API_REFUND_QUERY, data);
    }

    @buildReqData
    async purchaseOrderPush(data: types.purchaseOrderPush.Request) {
        return await request<types.purchaseOrderPush.Response>(this.host + PATH.PURCHASE_ORDER_PUSH, data);
    }

    @buildReqData
    async stockinPurchasePush(data: types.stockinPurchasePush.Request) {
        return await request<types.stockinPurchasePush.Response>(this.host + PATH.STOCKIN_PURCHASE_PUSH, data);
    }

    @buildReqData
    async purchaseOrderQuery(data: types.purchaseOrderQuery.Request) {
        return await request<types.purchaseOrderQuery.Response>(this.host + PATH.PURCHASE_ORDER_QUERY, data);
    }

    @buildReqData
    async stockinOrderQueryPurchase(data: types.stockinOrderQueryPurchase.Request) {
        return await request<types.stockinOrderQueryPurchase.Response>(this.host + PATH.STOCKIN_ORDER_QUERY_PURCHASE, data);
    }

    @buildReqData
    async purchaseReturnPush(data: types.purchaseReturnPush.Request) {
        return await request<types.purchaseReturnPush.Response>(this.host + PATH.PURCHASE_RETURN_PUSH, data);
    }

    @buildReqData
    async purchaseReturnOrderPush(data: types.purchaseReturnOrderPush.Request) {
        return await request<types.purchaseReturnOrderPush.Response>(this.host + PATH.PURCHASE_RETURN_ORDER_PUSH, data);
    }

    @buildReqData
    async purchaseReturnQuery(data: types.purchaseReturnQuery.Request) {
        return await request<types.purchaseReturnQuery.Response>(this.host + PATH.PURCHASE_RETURN_QUERY, data);
    }

    @buildReqData
    async stockoutOrderQueryReturn(data: types.stockoutOrderQueryReturn.Request) {
        return await request<types.stockoutOrderQueryReturn.Response>(this.host + PATH.STOCKOUT_ORDER_QUERY_RETURN, data);
    }

    @buildReqData
    async purchaseApplyQuery(data: types.purchaseApplyQuery.Request) {
        return await request<types.purchaseApplyQuery.Response>(this.host + PATH.PURCHASE_APPLY_QUERY, data);
    }

    @buildReqData
    async stockQuery(data: types.stockQuery.Request) {
        return await request<types.stockQuery.Response>(this.host + PATH.STOCK_QUERY, data);
    }

    @buildReqData
    async stockSyncByPd(data: types.stockSyncByPd.Request) {
        return await request<types.stockSyncByPd.Response>(this.host + PATH.STOCK_SYNC_BY_PD, data);
    }

    @buildReqData
    async stockPdOrderQuery(data: types.stockPdOrderQuery.Request) {
        return await request<types.stockPdOrderQuery.Response>(this.host + PATH.STOCK_PD_ORDER_QUERY, data);
    }

    @buildReqData
    async stockinOrderPush(data: types.stockinOrderPush.Request) {
        return await request<types.stockinOrderPush.Response>(this.host + PATH.STOCKIN_ORDER_PUSH, data);
    }

    @buildReqData
    async stockinOrderQuery(data: types.stockinOrderQuery.Request) {
        return await request<types.stockinOrderQuery.Response>(this.host + PATH.STOCKIN_ORDER_QUERY, data);
    }

    @buildReqData
    async stockoutOrderPush(data: types.stockoutOrderPush.Request) {
        return await request<types.stockoutOrderPush.Response>(this.host + PATH.STOCKOUT_ORDER_PUSH, data);
    }

    @buildReqData
    async stockoutOrderQuery(data: types.stockoutOrderQuery.Request) {
        return await request<types.stockoutOrderQuery.Response>(this.host + PATH.STOCKOUT_ORDER_QUERY, data);
    }

    @buildReqData
    async stockTransferPush(data: types.stockTransferPush.Request) {
        return await request<types.stockTransferPush.Response>(this.host + PATH.STOCK_TRANSFER_PUSH, data);
    }

    @buildReqData
    async stockoutTransferPush(data: types.stockoutTransferPush.Request) {
        return await request<types.stockoutTransferPush.Response>(this.host + PATH.STOCKOUT_TRANSFER_PUSH, data);
    }

    @buildReqData
    async stockinTransferPush(data: types.stockinTransferPush.Request) {
        return await request<types.stockinTransferPush.Response>(this.host + PATH.STOCKIN_TRANSFER_PUSH, data);
    }

    @buildReqData
    async stockTransferQuery(data: types.stockTransferQuery.Request) {
        return await request<types.stockTransferQuery.Response>(this.host + PATH.STOCK_TRANSFER_QUERY, data);
    }

    @buildReqData
    async vipStockQueryAll(data: types.vipStockQueryAll.Request) {
        return await request<types.vipStockQueryAll.Response>(this.host + PATH.VIP_STOCK_QUERY_ALL, data);
    }

    @buildReqData
    async vipWmsStockinoutOrderPush(data: types.vipWmsStockinoutOrderPush.Request) {
        return await request<types.vipWmsStockinoutOrderPush.Response>(this.host + PATH.VIP_WMS_STOCKINOUT_ORDER_PUSH, data);
    }

    @buildReqData
    async vipStockOutsideWmsQuery(data: types.vipStockOutsideWmsQuery.Request) {
        return await request<types.vipStockOutsideWmsQuery.Response>(this.host + PATH.VIP_STOCK_OUTSIDE_WMS_QUERY, data);
    }

    @buildReqData
    async vipJitReturnStockinOrderQuery(data: types.vipJitReturnStockinOrderQuery.Request) {
        return await request<types.vipJitReturnStockinOrderQuery.Response>(this.host + PATH.VIP_JIT_RETURN_STOCKIN_ORDER_QUERY, data);
    }

    @buildReqData
    async vipJitStockoutOrderQuery(data: types.vipJitStockoutOrderQuery.Request) {
        return await request<types.vipJitStockoutOrderQuery.Response>(this.host + PATH.VIP_JIT_STOCKOUT_ORDER_QUERY, data);
    }

}

