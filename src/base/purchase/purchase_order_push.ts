/**
 * 创建采购单
 * 推送采购单据给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_order_push.php
 */

import * as base from '../base';

export const path = '/purchase_order_push.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}