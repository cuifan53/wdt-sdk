/**
 * 查询货品档案
 * 获取ERP的货品档案资料，“货品档案”其他系统称为“物料档案”“商品档案”等
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=goods_query.php
 */

import * as base from '../base';

export interface Request extends base.Base {

    /**
     * 商家编码
     * 代表单品(sku)所有属性的唯一编码，用于系统单品区分
     */
    spec_no?: string;

    /**
     * 货品编号
     * 代表货品(spu)所有属性的唯一编号，用于系统货品区分
     */
    goods_no?: string;

    /**
     * 品牌编号
     */
    brand_no?: string;

    /**
     * 分类名称
     */
    class_name?: string;

    /**
     * 条码
     */
    barcode?: string;

    /**
     * 开始时间
     * 按最后修改时间增量查询数据 格式：YYYY-MM-DD HH:MM:SS
     */
    start_time?: string;

    /**
     * 结束时间
     * 按最后修改时间增量查询数据 格式：YYYY-MM-DD HH:MM:SS
     */
    end_time?: string;

    /**
     * 已删除货品
     * 默认为0,  0：不返回已删除货品    1：返回已删除货品
     */
    deleted?: number;

    /**
     * 分页大小
     * 每页返回的数据条数，输入值范围1~100，不传本参数输入值默认为30
     */
    page_size?: number;

    /**
     * 页号
     * 不传值默认从0页开始
     */
    page_no?: number;

}

export interface Response extends base.Base {

    /**
    * 数据条数
    * 只有page_no = 0 时，才返回的符合条件的数据总条数，用来分页
    */
    total_count: number;

    /**
     * 货品节点
     * 响应参数的1级数据节点，包含SPU所有属性信息的数据节点
     */
    goods_list: Goods[];

}

export interface Goods extends base.Base {

    /**
     * 货品ID
     */
    goods_id: number;

    /**
     * 货品编号
     * 代表货品(spu)所有属性的唯一编号，用于系统货品区分
     */
    goods_no: string;

    /**
     * 货品名称
     */
    goods_name: string;

    /**
     * 货品简称
     */
    short_name: string;

    /**
     * 货品别名
     */
    alias: string;

    /**
     * 货品类别
     * 货品类别 1销售商品 2原材料 3包装 4周转材料5虚拟商品6固定资产 0其它
     */
    goods_type: number;

    /**
     * 规格数
     */
    spec_count: number;

    /**
     * 拼音名称
     */
    pinyin: string;

    /**
     * 品牌编号
     */
    brand_no: string;

    /**
     * 品牌
     */
    brand_name: string;

    /**
     * 备注
     */
    remark: string;

    /**
     * 自定义属性1
     */
    props1: string;

    /**
     * 自定义属性2
     */
    props2: string;

    /**
     * 自定义属性3
     */
    props3: string;

    /**
     * 自定义属性4
     */
    props4: string;

    /**
     * 自定义属性5
     */
    props5: string;

    /**
     * 自定义属性6
     */
    props6: string;

    /**
     * 产地
     */
    origin: string;

    /**
     * 分类
     */
    class_name: string;

    /**
     * 基本单位
     */
    unit_name: string;

    /**
     * 辅助单位名称
     */
    aux_unit_name: string;

    /**
     * 标记名称
     */
    flag_name: string;

    /**
     * 创建时间 
     * 格式：YYYY-MM-DD HH:MM:SS
     */
    goods_created: string;

    /**
     * 最后修改时间
     * 格式：YYYY-MM-DD HH:MM:SS
     */
    goods_modified: string;

    /**
     * 是否已删除
     * 是否已删除： 0：未删除  >0代表已删除
     */
    deleted: number;

    /**
     * 单品节点
     * 包含sku所有属性信息的数据节点
     */
    spec_list: Spec[];

}

export interface Spec extends base.Base {

    /**
     * 规格ID
     */
    spec_id: number;

    /**
     * 商家编码
     * 代表单品(sku)所有属性的唯一编码，用于系统单品区分
     */
    spec_no: string;

    /**
     * 规格码
     */
    spec_code: string;

    /**
     * 主条码
     */
    barcode: string;

    /**
     * 规格名称
     */
    spec_name: string;

    /**
     * 货品ID
     */
    goods_id: number;

    /**
     * 允许负库存
     * 是否允许负库存1允许，0不允许（默认为1）
     */
    is_allow_neg_stock: number;

    /**
     * 是否启用序列号
     * 默认不启用，0不启用序列号 1强序列号 2弱序列
     */
    is_sn_enable: number;

    /**
     * 是否启用同一批次出库
     * 默认不启用，0不启用1启用
     */
    is_single_batch: number;

    /**
     * 是否出库不用验货
     * 默认不开启该配置，0出库不验货未开启  1出库不验货开启
     */
    is_not_need_examine: number;

    /**
     * 是否允许0成本
     * 默认允许，0不允许1允许
     */
    is_zero_cost: number;

    /**
     * 是否允许低于成本价
     * 默认不允许，0不允许1允许
     */
    is_lower_cost: number;

    /**
     * 是否航空禁运
     * 默认不开启，0不开启1开启
     */
    is_not_use_air: number;

    /**
     * 是否畅销品
     * 默认非畅销，0非畅销 1畅销
     */
    is_popular: number;

    /**
     * 补货
     * 默认低于警戒库存补货，0持续补货1不补货2低于警戒库存补货
     */
    replenish_type: number;

    /**
     * 拆分
     * 默认普通件，-1非单发件(需和其他类型货品一起发) 0普通件 1普通大件(可与非大件一起发) 2独立大件(必须单独发)
     */
    large_type: number;

    /**
     * 基本单位
     */
    spec_unit_name: string;

    /**
     * 最低价
     * decimal(19,4)
     */
    lowest_price: number;

    /**
     * 图片url地址
     */
    img_url: string;

    /**
     * 零售价
     * 商品标价，系统内手工建单时使用，传值时需谨慎
     * decimal(19,4)
     */
    retail_price: number;

    /**
     * 批发价
     * decimal(19,4)
     */
    wholesale_price: number;

    /**
     * 会员价
     * decimal(19,4)
     */
    member_price: number;

    /**
     * 市场价
     * decimal(19,4)
     */
    market_price: number;

    /**
     * 销售积分
     * decimal(19,4)
     */
    sale_score: number;

    /**
     * 打包积分	
     * decimal(19,4)
     */
    pack_score: number;

    /**
     * 拣货积分	
     * decimal(19,4)
     */
    pick_score: number;

    /**
     * 有效期天数
     */
    validity_days: number;

    /**
     * 最佳销售天数
     */
    sales_days: number;

    /**
     * 最佳收获天数
     */
    receive_days: number;

    /**
     * 重量	
     * decimal(19,4)
     */
    weight: number;

    /**
     * 	长
     * decimal(19,4)
     */
    length: number;

    /**
     * 宽	
     * decimal(19,4)
     */
    width: number;

    /**
     * 高	
     * decimal(19,4)
     */
    height: number;

    /**
     * 税率	
     * decimal(19,4)
     */
    tax_rate: number;

    /**
     * 自定义属性1
     */
    prop1: string;

    /**
     * 自定义属性2
     */
    prop2: string;

    /**
     * 自定义属性3
     */
    prop3: string;

    /**
     * 自定义属性4
     */
    prop4: string;

    /**
     * 自定义属性5
     */
    prop5: string;

    /**
     * 自定义属性6
     */
    prop6: string;

    /**
     * 自定义价格1
     * decimal(19,4)
     */
    custom_price1: number;

    /**
     * 自定义价格2
     * decimal(19,4)
     */
    custom_price2: number;

    /**
     * 单品辅助单位名称
     */
    spec_aux_unit_name: string;

    /**
     * 税务编码
     */
    tax_code: string;

    /**
     * 备注
     */
    remark: string;

    /**
     * 创建时间 
     * 格式：YYYY-MM-DD HH:MM:SS
     */
    spec_created: string;

    /**
     * 最后修改时间
     * 格式：YYYY-MM-DD HH:MM:SS
     */
    spec_modified: string;

    /**
     * 是否已删除
     * 是否已删除： 0：未删除  >0代表已删除
     */
    deleted: number;

}