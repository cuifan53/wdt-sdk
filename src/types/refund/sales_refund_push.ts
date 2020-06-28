/**
 * 创建原始退款单
 * 销售订单发货后，退款或退货单据推送至ERP 注：销售订单的售后换货订单此接口推送“退货类型”退款单，换出订单“trade_push.php”推送
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=sales_refund_push.php
 */

import * as base from '../base';

export interface Request extends base.Base {

}

export interface Response extends base.Base {

}