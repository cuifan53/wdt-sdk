/**
 * 增量查询库存
 * 增量获取ERP实际库存、库存占用等数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_query.php
 */

import * as base from '../base';

export const path = '/stock_query.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}