/**
 * 创建平台货品
 * 在推送销售订单给ERP之前，需要映射匹配ERP系统单品或者设置同步库存的策略
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=api_goodsspec_push.php
 */

import * as base from '../base';

export interface Request extends base.Base {

    /**
     * 货品节点
     * 请求参数的1级数据节点，包含平台（商城）商品所有属性信息的数据节点
     */
    api_goods_info?: ApiGoodsInfo;

}

export interface Response extends base.Base { }

export interface ApiGoodsInfo extends base.Base {

    /**
     * 平台ID
     */
    platform_id?: number;

    /**
     * 店铺编号
     * 代表店铺所有属性的唯一编码，用于店铺区分
     */
    shop_no?: string;

    /**
     * 平台货品节点
     */
    goods_list?: Goods[];

}

export interface Goods extends base.Base {

    /**
     * 货品ID
     * 平台系统货品主键，和创建原始订单接口中含义相同
     */
    goods_id?: string;

    /**
     * 规格ID
     * 平台系统货品规格id
     */
    spec_id?: string;

    /**
     * 货品编码
     */
    goods_no?: string;

    /**
     * 规格编码
     */
    spec_no?: string;

    /**
     * 状态
     * 0删除 1在架 2下架
     */
    status?: number;

    /**
     * 货品名称
     */
    goods_name?: string;

    /**
     * 平台规格码
     */
    spec_code?: string;

    /**
     * 规格名称
     */
    spec_name?: string;

    /**
     * 图片url	
     */
    pic_url?: string;

    /**
     * 价格	
     * decimal(19,4)
     */
    price?: number;

    /**
     * 平台库存	
     * decimal(19,4)
     */
    stock_num?: number;

    /**
     * 平台类目	
     */
    cid?: string;
}