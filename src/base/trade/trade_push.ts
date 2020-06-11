/**
 * 创建原始订单
 * ①推送销售订单给ERP ②更新已推送成功的销售订单
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=trade_push.php
 */

import * as base from '../base';

export const path = '/trade_push.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}