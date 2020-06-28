/**
 * 查询物流
 * 获取ERP的物流公司档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=logistics.php
 */

import * as base from '../base';

export interface Request extends base.Base {

    /**
     * 物流编号
     * 代表物流所有属性的唯一编码，用于物流区分，ERP内支持自定义（ERP物流界面设置），用于获取指定物流数据信息
     */
    logistics_no?: string;

    /**
     * 物流公司名称
     * 物流公司名称（ERP中自定义的物流名称）
     */
    logistics_name?: string;

}

export interface Response extends base.Base {

    /**
     * 物流档案列表节点
     */
    logistics_list: Logistics[];

}

export interface Logistics extends base.Base {

    /**
     * 主键
     * 物流档案主键
     */
    logistics_id: number;

    /**
     * 物流编号
     * 代表物流所有属性的唯一编码，用于物流区分，ERP内支持自定义（ERP物流界面设置），用于获取指定物流数据信息
     */
    logistics_no: string;

    /**
     * 物流名称
     * 物流公司名称（ERP中自定义的物流名称）
     */
    logistics_name: string;

    /**
     * 物流方式
     * 响应值为代表物流方式的数字
     */
    logistics_type: number;

    /**
     * 发件地址省份
     */
    province: string;

    /**
     * 发件地址市
     */
    city: string;

    /**
     * 发件地址区
     */
    district: string;

    /**
     * 联系人
     */
    contact: string;

    /**
     * 电话
     */
    telno: string;

    /**
     * 手机
     */
    mobile: string;

    /**
     * 地址
     */
    address: string;

    /**
     * 物流佣金比例
     * decimal(5,4)
     */
    commission_ratio: number;

    /**
     * 货运方式
     * 货运方式:0.标准快递、1.生鲜速配、2.冷运速配
     */
    send_type: number;

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
     * 是否禁用
     * 是否禁用:0.否;1.是
     */
    is_disabled: number;

    /**
     * 物流的优先级
     * 物流的优先级,物流界面的顺序,从上至下依次递减
     */
    priority: number;

    /**
     * 是否支持货到付款
     * 是否支持货到付款:0.否;1.是
     */
    is_support_cod: number;

    /**
     * 业务模块
     * 1销售物流；2采购物流
     */
    service_mask: number;

    /**
     * 单号类型
     * 0表示普通；1表示线下电子面单；2表示平台电子面单
     */
    bill_type: number;

    /**
     * 是否启用在线发货
     * 是否启用在线发货:0.否;1.是
     */
    is_online: number;

    /**
     * 是否”不使用接口大头笔”
     * 是否”不使用接口大头笔”:0.否;1.是
     */
    is_dtb_no_api: number;

    /**
     * 是否”不重复利用单号”
     * 是否”不重复利用单号”:0.否;1.是
     */
    un_repeat_logistics_no: number;

    /**
     * 是否手动获取单号
     * 是否手动获取单号:0.否;1.是
     */
    is_manual: number;

    /**
     * 快递单的正则表达式
     * 用来检查合法性
     */
    logistics_regex: string;

    /**
     * 单号规则不校验
     * 校验物流单号正则表达式:0.校验;1.不校验
     */
    be_uncheck_regexp: number;

    /**
     * 备注
     */
    remark: string;

    /**
     * 最后修改时间
     */
    modified: string;

    /**
     * 创建时间
     */
    created: string;

    /**
     * 邮编
     */
    zip: string;

}