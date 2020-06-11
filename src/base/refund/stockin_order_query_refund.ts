/**
 * 查询退货入库单
 * 获取ERP销售退货（换货）订单对应的入库单信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_order_query_refund.php
 */

import * as base from '../base';

export const path = '/stockin_order_query_refund.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}