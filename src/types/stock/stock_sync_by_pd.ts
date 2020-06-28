/**
 * 创建盘点单
 * ERP库存需要调整时，推送盘点库存单据给ERP，覆盖ERP实物库存。注：ERP盘点成功后，盘点单内的库存值直接覆盖前库存
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_sync_by_pd.php
 */

import * as base from '../base';

export interface Request extends base.Base {

}

export interface Response extends base.Base {

}