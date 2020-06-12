/**
 * 创建其他入库单
 * ERP需要增加库存且入库单据没有对应的业务类型，调用本接口在ERP创建其他入库单，增加库存
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_order_push.php
 */

import * as base from '../base';

export const path = '/stockin_order_push.php';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}