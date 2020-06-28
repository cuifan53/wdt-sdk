/**
 * 创建退货入库单
 * 推送ERP销售退货（换货）订单对应的入库单据给ERP 推送前提ERP的退换单状态为“待收货”
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_refund_push.php
 */

import * as base from '../base';

export interface Request extends base.Base {

}

export interface Response extends base.Base {

}