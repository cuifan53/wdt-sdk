/**
 * 查询供应商
 * 获取ERP的供应商档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_provider_query.php
 */

import * as base from '../base';

export interface Request extends base.Request {

    /**
     * 返回字段
     * 需要返回的字段，多个用‘，’隔开（可选字段：provider_id,provider_no,provider_name,contact,telno,mobile,fax,zip,email,qq,wangwang,address,website,remark,is_disabled,deleted,modified,created）
     */
    column: string;

    /**
     * 供应商编号
     * 代表供应商所有属性的唯一编码，用于供应商区分，ERP内支持自定义（ERP供应商界面设置），用于获取指定供应商数据信息
     */
    provider_no?: string;

    /**
     * 供应商名称
     * 供应商名称（ERP内自定义的名称）
     */
    provider_name?: string;

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

export interface Response extends base.Response {

    /**
     * 数据条数
     * 只有page_no = 0 时，才返回的符合条件的数据总条数，用来分页
     */
    total_count?: number;

    /**
     * 供应商信息列表
     */
    provider_list: Provider[];

}

export interface Provider {

    /**
     * 供应商ID 主键
     */
    provider_id: number;

    /**
     * 供应商编号
     * 代表供应商所有属性的唯一编码，用于供应商区分，ERP内支持自定义（ERP供应商界面设置），用于获取指定供应商数据信息 
     */
    provider_no: string;

    /**
     * 供应商名称
     * 供应商名称（ERP内自定义的名称）
     */
    provider_name: string;

    /**
     * 联系人
     * ERP中编辑的联系人
     */
    contact: string;

    /**
     * 电话
     * 供应商设置中座机信息 
     */
    telno: string;

    /**
     * 移动电话
     * 供应商设置中移动电话
     */
    mobile: string;

    /**
     * 传真
     * 供应商设置中传真 
     */
    fax: string;

    /**
     * 邮编
     * 供应商设置中邮编
     */
    zip: string;

    /**
     * Email
     * 供应商设置中邮件
     */
    email: string;

    /**
     * QQ 
     * 供应商设置中QQ
     */
    qq: string;

    /**
     * 旺旺账号
     * 供应商设置中旺旺账号
     */
    wangwang: string;

    /**
     * 收款银行账户
     */
    account_bank_no: string;

    /**
     * 收款银行
     */
    account_bank: string;

    /**
     * 收款人
     */
    collect_name: string;

    /**
     * 国家
     * 国家编码，默认为0
     */
    country: number;

    /**
     * 省份
     * 省份编码
     */
    province: number;

    /**
     * 城市
     * 城市编码
     */
    city: number;

    /**
     * 区县
     * 区县编码
     */
    district: number;

    /**
     * 地址 
     * 供应商设置中地址
     */
    address: string;

    /**
     * 网址 
     * 供应商设置中网址
     */
    website: string;

    /**
     * 最小采购量 
     * decimal(19,4)
     */
    min_purchase_num: number;

    /**
     * 采购周期
     */
    purchase_cycle_days: number;

    /**
     * 到货周期
     */
    arrive_cycle_days: number;

    /**
     * 结算周期
     */
    charge_cycle_days: number;

    /**
     * 最后采购日期
     */
    last_purchase_time: string;

    /**
     * 备注
     */
    remark: string;

    /**
     * 是否禁用
     * 是否禁用:0.否;1.是
     */
    is_disabled: number;

    /**
     * 删除时间戳
     * 1970年至删除时间的时长
     */
    deleted: number;

    /**
     * 最后修改时间
     */
    modified: string;

    /**
     * 创建时间
     */
    created: string;

}