/**
 * 查询物流同步
 * ERP销售订单的发货状态、物流单号等同步给其他系统。 注：”查询物流同步”与“物流同步回写”两个接口配合使用，完成“销售订单发货同步”
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=logistics_sync_query.php
 */

import * as base from '../base';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}