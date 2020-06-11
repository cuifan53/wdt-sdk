/**
 * 创建采购退货单
 * 推送采购退货单据给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_return_push.php
 */

import * as base from '../base';

export const path = '/purchase_return_push.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}