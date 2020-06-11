/**
 * 创建调拨单
 * ERP内仓与仓之间的库存需要调度时，推送调拨单给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_transfer_push.php
 */

import * as base from '../base';

export const path = '/stock_transfer_push.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}