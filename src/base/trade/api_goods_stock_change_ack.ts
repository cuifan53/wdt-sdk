/**
 * 库存同步回写
 * 库存量同步至平台是否成功的状态回传给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=api_goods_stock_change_ack.php
 */

import * as base from '../base';

export const path = '/api_goods_stock_change_ack.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}