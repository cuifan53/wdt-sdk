/**
 * 正式环境
 */
export const HOST = 'http://api.wangdian.cn/openapi2';

/**
 * 沙箱环境
 */
export const SANDBOX_HOST = 'http://sandbox.wangdian.cn/openapi2';

/**
 * 查询店铺
 * 获取ERP的店铺档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=shop.php
 */
export const SHOP = '/shop.php';

/**
 * 查询仓库
 * 获取ERP的仓库档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=warehouse_query.php
 */
export const WAREHOUSE_QUERY = '/warehouse_query.php';

/**
 * 查询物流
 * 获取ERP的物流公司档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=logistics.php
 */
export const LOGISTICS = '/logistics.php';

/**
 * 查询供应商
 * 获取ERP的供应商档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_provider_query.php
 */
export const PURCHASE_PROVIDER_QUERY = '/purchase_provider_query.php';

/**
 * 创建供应商
 * 推送供应商档案资料给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_provider_create.php
 */
export const PURCHASE_PROVIDER_CREATE = '/purchase_provider_create.php';

/**
 * 创建货品档案
 * ①推送货品资料给ERP ②更新ERP货品档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=goods_push.php
 */
export const GOODS_PUSH = '/goods_push.php';

/**
 * 查询货品档案
 * 获取ERP的货品档案资料，“货品档案”其他系统称为“物料档案”“商品档案”等
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=goods_query.php
 */
export const GOODS_QUERY = '/goods_query.php';

/**
 * 创建平台货品
 * 在推送销售订单给ERP之前，需要映射匹配ERP系统单品或者设置同步库存的策略
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=api_goodsspec_push.php
 */
export const API_GOODSSPEC_PUSH = '/api_goodsspec_push.php';

/**
 * 查询平台货品[增值]
 * 获取ERP平台货品界面数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_api_goods_query.php
 */
export const VIP_API_GOODS_QUERY = '/vip_api_goods_query.php';

/**
 * 查询组合装货品
 * 获取ERP中组合装界面的组合装资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=suites_query.php
 */
export const SUITES_QUERY = '/suites_query.php';

/**
 * 查询货品分类
 * 查询货品分类档案
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=goods_class_query.php
 */
export const GOODS_CLASS_QUERY = '/goods_class_query.php';

/**
 * 创建原始订单
 * ①推送销售订单给ERP ②更新已推送成功的销售订单
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=trade_push.php
 */
export const TRADE_PUSH = '/trade_push.php';

/**
 * 查询订单管理
 * 获取ERP的销售订单信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=trade_query.php
 */
export const TRADE_QUERY = '/trade_query.php';

/**
 * 查询销售出库单
 * 获取ERP销售订单的出库单信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockout_order_query_trade.php
 */
export const STOCKOUT_ORDER_QUERY_TRADE = '/stockout_order_query_trade.php';

/**
 * 查询物流同步
 * ERP销售订单的发货状态、物流单号等同步给其他系统。 注：”查询物流同步”与“物流同步回写”两个接口配合使用，完成“销售订单发货同步”
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=logistics_sync_query.php
 */
export const LOGISTICS_SYNC_QUERY = '/logistics_sync_query.php';

/**
 * 物流同步回写
 * 同步发货状态、物流单号给平台是否成功的状态回传给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=logistics_sync_ack.php
 */
export const LOGISTICS_SYNC_ACK = '/logistics_sync_ack.php';

/**
 * 查询库存同步
 * 获取变化后的ERP可销库存，并同步至平台店铺 注：”查询同步库存”与“库存同步回写”两个接口配合使用，完成“库存同步”
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=api_goods_stock_change_query.php
 */
export const API_GOODS_STOCK_CHANGE_QUERY = '/api_goods_stock_change_query.php';

/**
 * 库存同步回写
 * 库存量同步至平台是否成功的状态回传给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=api_goods_stock_change_ack.php
 */
export const API_GOODS_STOCK_CHANGE_ACK = '/api_goods_stock_change_ack.php';

/**
 * 查询销售汇总[增值]
 * 获取销售出库单汇总数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_stat_sales_by_spec_shop_warehouse_query.php
 */
export const VIP_STAT_SALES_BY_SPEC_SHOP_WAREHOUSE_QUERY = '/vip_stat_sales_by_spec_shop_warehouse_query.php';

/**
 * 重量回传[增值]
 * 自动化称重机、自动化分拣系统、仓储设备控制系统等称重以后，将重量回传写入旺店通ERP销售出库单
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_stockout_sales_weight_push.php
 */
export const VIP_STOCKOUT_SALES_WEIGHT_PUSH = '/vip_stockout_sales_weight_push.php';

/**
 * 修改订单标记[增值]
 * 修改订单发票编号、发货物流（快递）等信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_trade_modify.php
 */
export const VIP_TRADE_MODIFY = '/vip_trade_modify.php';

/**
 * 查询原始订单[增值]
 * 查询电商平台的销售订单数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_api_trade_query.php
 */
export const VIP_API_TRADE_QUERY = '/vip_api_trade_query.php';

/**
 * 查询开票信息[增值]
 * 获取百旺、航天等开发票系统需要的开票数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_invoice_info_query.php
 */
export const VIP_INVOICE_INFO_QUERY = '/vip_invoice_info_query.php';

/**
 * 回传开票结果[增值]
 * 回传开发票结果信息发票号码、代码、电子发票的下载地址等
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_invoice_info_update.php
 */
export const VIP_INVOICE_INFO_UPDATE = '/vip_invoice_info_update.php';

/**
 * 创建原始退款单
 * 销售订单发货后，退款或退货单据推送至ERP 注：销售订单的售后换货订单此接口推送“退货类型”退款单，换出订单“trade_push.php”推送
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=sales_refund_push.php
 */
export const SALES_REFUND_PUSH = '/sales_refund_push.php';

/**
 * 创建退货入库单
 * 推送ERP销售退货（换货）订单对应的入库单据给ERP 推送前提ERP的退换单状态为“待收货”
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_refund_push.php
 */
export const STOCKIN_REFUND_PUSH = '/stockin_refund_push.php';

/**
 * 查询退换管理
 * 获取ERP销售退货（换货）订单信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=refund_query.php
 */
export const REFUND_QUERY = '/refund_query.php';

/**
 * 查询退货入库单
 * 获取ERP销售退货（换货）订单对应的入库单信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_order_query_refund.php
 */
export const STOCKIN_ORDER_QUERY_REFUND = '/stockin_order_query_refund.php';

/**
 * 查询销售退货汇总[增值]
 * 获取销售订单退回货品汇总数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_stat_refund_by_spec_shop_warehouse_query.php
 */
export const VIP_STAT_REFUND_BY_SPEC_SHOP_WAREHOUSE_QUERY = '/vip_stat_refund_by_spec_shop_warehouse_query.php';

/**
 * 查询原始退款单[增值]
 * 查询原始退款单界面的原始退款单数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_api_refund_query.php
 */
export const VIP_API_REFUND_QUERY = '/api_refund_query.php';

/**
 * 创建采购单
 * 推送采购单据给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_order_push.php
 */
export const PURCHASE_ORDER_PUSH = '/purchase_order_push.php';

/**
 * 创建采购入库单
 * 推送采购单对应的入库单给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_purchase_push.php
 */
export const STOCKIN_PURCHASE_PUSH = '/stockin_purchase_push.php';

/**
 * 查询采购单
 * 获取ERP的采购单及其明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_order_query.php
 */
export const PURCHASE_ORDER_QUERY = '/purchase_order_query.php';

/**
 * 查询采购入库单
 * 批量获取ERP采购单对应的入库单信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_order_query_purchase.php
 */
export const STOCKIN_ORDER_QUERY_PURCHASE = '/stockin_order_query_purchase.php';

/**
 * 创建采购退货单
 * 推送采购退货单据给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_return_push.php
 */
export const PURCHASE_RETURN_PUSH = '/purchase_return_push.php';

/**
 * 创建采购退货出库单
 * 单个推送采购退货单对应的出库单给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_return_order_push.php
 */
export const PURCHASE_RETURN_ORDER_PUSH = '/purchase_return_order_push.php';

/**
 * 查询采购退货单
 * 批量获取ERP的采购退货单及明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_return_query.php
 */
export const PURCHASE_RETURN_QUERY = '/purchase_return_query.php';

/**
 * 查询采购退货出库单
 * 获取ERP的采购退货出库单及其明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockout_order_query_return.php
 */
export const STOCKOUT_ORDER_QUERY_RETURN = '/stockout_order_query_return.php';

/**
 * 查询采购申请单
 * 获取ERP的采购申请单及其明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_apply_query.php
 */
export const PURCHASE_APPLY_QUERY = '/purchase_apply_query.php';

/**
 * 增量查询库存
 * 增量获取ERP实际库存、库存占用等数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_query.php
 */
export const STOCK_QUERY = '/stock_query.php';

/**
 * 创建盘点单
 * ERP库存需要调整时，推送盘点库存单据给ERP，覆盖ERP实物库存。注：ERP盘点成功后，盘点单内的库存值直接覆盖前库存
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_sync_by_pd.php
 */
export const STOCK_SYNC_BY_PD = '/stock_sync_by_pd.php';

/**
 * 查询盘点单
 * 获取调整ERP库存的盘点单据信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_pd_order_query.php
 */
export const STOCK_PD_ORDER_QUERY = '/stock_pd_order_query.php';

/**
 * 创建其他入库单
 * ERP需要增加库存且入库单据没有对应的业务类型，调用本接口在ERP创建其他入库单，增加库存
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_order_push.php
 */
export const STOCKIN_ORDER_PUSH = '/stockin_order_push.php';

/**
 * 查询入库单管理
 * 获取ERP的各种业务类型的入库单就其明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_order_query.php
 */
export const STOCKIN_ORDER_QUERY = '/stockin_order_query.php';

/**
 * 创建其他出库单
 * ERP需要减少库存且出库单据没有对应的业务类型，推送其他出库单给ERP，并执行出库操作（扣减库存等），在ERP中属于其他出库，order_type类型记录在单据的remark备注信息中
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockout_order_push.php
 */
export const STOCKOUT_ORDER_PUSH = '/stockout_order_push.php';

/**
 * 查询出库单管理
 * 获取ERP各种业务类型的出库单及货品明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockout_order_query.php
 */
export const STOCKOUT_ORDER_QUERY = '/stockout_order_query.php';

/**
 * 创建调拨单
 * ERP内仓与仓之间的库存需要调度时，推送调拨单给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_transfer_push.php
 */
export const STOCK_TRANSFER_PUSH = '/stock_transfer_push.php';

/**
 * 创建调拨出库单
 * 调拨业务走到出库步骤时，推送调拨出库单给ERP，执行调拨业务中的出库步骤
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockout_transfer_push.php
 */
export const STOCKOUT_TRANSFER_PUSH = '/stockout_transfer_push.php';

/**
 * 创建调拨入库单
 * ERP调拨业务中发货仓库出库完成，收货仓库需要入库单前推送调拨入库单给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stockin_transfer_push.php
 */
export const STOCKIN_TRANSFER_PUSH = '/stockin_transfer_push.php';

/**
 * 查询调拨单
 * 获取ERP的调拨及货品明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=stock_transfer_query.php
 */
export const STOCK_TRANSFER_QUERY = '/stock_transfer_query.php';

/**
 * 全量查询库存[增值]
 * 全量获取ERP实际库存、库存占用等数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_stock_query_all.php
 */
export const VIP_STOCK_QUERY_ALL = '/vip_stock_query_all.php';

/**
 * 创建委外出入库单[增值]
 * 创建委外出入库单据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_wms_stockinout_order_push.php
 */
export const VIP_WMS_STOCKINOUT_ORDER_PUSH = '/vip_wms_stockinout_order_push.php';

/**
 * 查询委外出入库单[增值]
 * 获取委外出入库单及货品明细数据
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_stock_outside_wms_query.php
 */
export const VIP_STOCK_OUTSIDE_WMS_QUERY = '/vip_stock_outside_wms_query.php';

/**
 * 查询JIT退货入库单[增值]
 * 获取JIT退货入库单及其货品明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_jit_return_stockin_order_query.php
 */
export const VIP_JIT_RETURN_STOCKIN_ORDER_QUERY = '/vip_jit_return_stockin_order_query.php';

/**
 * 查询JIT出库单[增值]
 * 获取JIT出库单及其货品明细信息
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=vip_jit_stockout_order_query.php
 */
export const VIP_JIT_STOCKOUT_ORDER_QUERY = '/vip_jit_stockout_order_query.php';