/**
 * 查询仓库
 * 获取ERP的仓库档案资料
 * https://open.wangdian.cn/qyb/open/apidoc/doc?path=warehouse_query.php
 */

import * as base from '../base';

export interface Request extends base.Base {

    /**
     * 仓库编号
     * 代表仓库所有属性的唯一编码，用于仓库区分，ERP内支持自定义（ERP仓库界面设置），用于获取指定仓库数据信息(不支持一次推送多个仓库编码)
     */
    warehouse_no?: string;

    /**
     * 仓库类型
     * 1普通仓库 2自动流传外部 3京东仓储 4科捷 5百世物流 6 SKU360 7通天晓 8中联网仓 9顺丰仓储 10网仓2号 11奇门仓储 12旺店通仓储 13心怡仓储 14力威仓储 127其它(不传默认返回全部类型)
     */
    type?: number;

    /**
     * 子类型
     * 仓库子类型（针对其它仓储 1米氏实体店 2 线下虚拟店）
     */
    sub_type?: number | Date;

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
     * 仓库详情数据节点
     */
    warehouses: Warehouse[];

}

export interface Warehouse extends base.Base {

    /**
     * 仓库编号
     * 代表仓库所有属性的唯一编码，用于仓库区分，ERP内支持自定义（ERP仓库界面设置），用于获取指定仓库数据信息
     */
    warehouse_no: string;

    /**
     * 仓库名称
     * ERP仓库界面的仓库名称
     */
    name: string;

    /**
     * 仓库类型
     * （0不限 1普通仓库 2自动流传外部 3京东仓储 4科捷 5百世物流 6 SKU360 7通天晓 8中联网仓 9顺丰仓储 10网仓2号 11奇门仓储 12旺店通仓储 13心怡仓储 14力威仓储 127其它）
     */
    warehouse_type: number;

    /**
     * 外部仓库编号
     */
    ext_warehouse_no: string;

    /**
     * 省
     * 仓库设置的省份信息
     */
    province: string;

    /**
     * 市
     * 仓库设置的城市信息
     */
    city: string;

    /**
     * 区/县
     * 仓库设置的区县信息
     */
    district: string;

    /**
     * 仓库地址
     */
    address: string;

    /**
     * 联系人
     * 仓库设置中的联系人
     */
    contact: string;

    /**
     * 电话
     * 仓库设置中的固话信息
     */
    telno: string;

    /**
     * 邮编
     */
    zip: string;

    /**
     * 移动电话
     * 仓库设置中的手机信息
     */
    mobile: string;

    /**
     * 是否是残次仓
     * 是否是残次仓（0不是，1是）
     */
    is_defect: number;

    /**
     * 备注
     * 仓库设置中的备注信息
     */
    remark: string;

    /**
     * 自定义
     * 自定义1(ERP内不显示该字段)
     */
    prop1: string;

    /**
     * 自定义
     * 自定义2(ERP内不显示该字段)
     */
    prop2: string;

    /**
     * 最后修改时间
     * 最后修改时间，格式： YYYY-MM-DD HH:MM:SS
     */
    modified: string;

}