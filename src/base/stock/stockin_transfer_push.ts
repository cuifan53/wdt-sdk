/**
 * 创建调拨入库单
 * ERP调拨业务中发货仓库出库完成，收货仓库需要入库单前推送调拨入库单给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_transfer_push.php
 */

import * as base from '../base';

export const path = '/stockin_transfer_push.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}