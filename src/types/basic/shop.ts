/**
 * 查询店铺
 * 获取ERP的店铺档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=shop.php
 */

import * as base from '../base';

export interface Request extends base.Base {

    /**
     * 店铺编号
     * 代表店铺所有属性的唯一编码，用于店铺区分，ERP内支持自定义（ERP店铺界面设置），用于获取指定店铺数据信息
     */
    shop_no?: string;

    /**
     * 平台ID
     */
    platform?: number;

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
     * 店铺列表节点
     * 店铺详情数据节点
     */
    shoplist: Shop[];

}

export interface Shop extends base.Base {

    /**
     * 平台ID
     */
    platform_id: number;

    /**
     * 子平台ID
     */
    sub_platform_id: number;

    /**
     * 店铺ID
     * 店铺列表主键
     */
    shop_id: number;

    /**
     * 店铺编号
     * 代表店铺所有属性的唯一编码，用于店铺区分，ERP内支持自定义（ERP店铺界面设置）
     */
    shop_no: string;

    /**
     * 店铺名称
     * ERP店铺界面的店铺名称
     */
    shop_name: string;

    /**
     * 平台授权账号ID
     */
    account_id: string;

    /**
     * 平台授权账号昵称
     */
    account_nick: string;

    /**
     * 省份ID
     * ERP店铺设置中的省份ID
     */
    province: number;

    /**
     * 城市ID
     * ERP店铺设置中的城市ID
     */
    city: number;

    /**
     * 区县ID
     * ERP店铺设置中的区县ID
     */
    district: number;

    /**
     * 省份名称
     * ERP店铺设置中的省份名称信息
     */
    province_name: string;

    /**
     * 城市名称
     * ERP店铺设置中的城市名称信息
     */
    city_name: string;

    /**
     * 区县名称
     * ERP店铺设置中的区县名称信息
     */
    district_name: string;

    /**
     * 地址
     * ERP店铺设置中的地址信息
     */
    address: string;

    /**
     * 联系人
     * ERP店铺设置中的联系人信息
     */
    contact: string;

    /**
     * 邮编
     * ERP店铺设置中的邮编信息
     */
    zip: string;

    /**
     * 移动电话
     * ERP店铺设置中的手机信息
     */
    mobile: string;

    /**
     * 固定电话
     * ERP店铺设置中的电话信息
     */
    telno: string;

    /**
     * 备注
     * ERP店铺设置中的备注信息
     */
    remark: string;

}