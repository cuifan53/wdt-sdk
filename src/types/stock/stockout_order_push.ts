/**
 * 创建其他出库单
 * ERP需要减少库存且出库单据没有对应的业务类型，推送其他出库单给ERP，并执行出库操作（扣减库存等），在ERP中属于其他出库，order_type类型记录在单据的remark备注信息中
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockout_order_push.php
 */

import * as base from '../base';

export interface Request extends base.Request {

}

export interface Response extends base.Response {

}