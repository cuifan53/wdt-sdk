/**
 * 查询库存同步
 * 获取变化后的ERP可销库存，并同步至平台店铺 注：”查询同步库存”与“库存同步回写”两个接口配合使用，完成“库存同步”
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=api_goods_stock_change_query.php
 */

import * as base from '../base';

export interface Request extends base.Base {

}

export interface Response extends base.Base {

}