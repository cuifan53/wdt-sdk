/**
 * 创建供应商
 * 推送供应商档案资料给ERP
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=purchase_provider_create.php
 */

import * as base from '..';

export const path = '/purchase_provider_create.php';

export interface Request extends base.Request {

    /**
     * 供应商编号
     * 代表供应商所有属性的唯一编码，用于供应商区分，ERP内支持自定义（ERP供应商界面设置），用于创建供应商数据信息
     */
    provider_no: string;

    /**
     * 供应商名称
     */
    provider_name: string;

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
     * 联系人
     */
    contact?: string;

    /**
     * 座机
     */
    telno?: string;

    /**
     * 移动电话
     */
    mobile?: string;

    /**
     * 传真
     */
    fax?: string;

    /**
     * 邮编
     */
    zip?: string;

    /**
     * 邮箱 
     */
    email?: string;

    /**
     * QQ
     */
    qq?: string;

    /**
     * 旺旺
     */
    wangwang?: string;

    /**
     * 地址
     */
    address?: string;

    /**
     * 网址
     */
    website?: string;

    /**
     * 最后采购日期
     * 对供应商最后一次采购日期，不传默认接口创建供应商的年月日，格式: YYYY-MM-DD 
     */
    last_purchase_time?: string;

    /**
     * 禁用
     * 是否禁用:0.否;1.是
     */
    is_disabled?: number;

    /**
     * 结算周期
     * 对供应商的账款结算周期，单位(天)，不传默认0
     */
    charge_cycle_days?: number;

}

export interface Response extends base.Response { }