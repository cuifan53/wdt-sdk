/**
 * 物流同步回写
 * 同步发货状态、物流单号给平台是否成功的状态回传给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=logistics_sync_ack.php
 */

import * as base from '../base';

export const path = '/logistics_sync_ack.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}