export interface Base {

    [propName: string]: any;

}

export interface Request extends Base {

    /**
     * 卖家账号
     * 购买ERP时由旺店通分配给ERP购买方，请从ERP购买方获取
     */
    sid?: string;

    /**
     * 接口账号
     * 本开放平台“自助对接”功能模块内自助申请
     */
    appkey?: string;

    /**
     * 时间戳
     * 北京时间1970-01-01 08:00:00起至现在的总秒数，10位int值,旺店通企业版API服务端允许请求最大时间误差为5min，date.timezone = Asia/Shanghai
     */
    timestamp?: number;

    /**
     * 签名
     * API输入参数签名结果 签名算法：https://open.wangdian.cn/open/guide?path=guide_signsf
     */
    sign?: string;

}

export interface Response extends Base {

    /**
     * 错误码 
     * 0表示成功,其他表示失败
     */
    code: number;

    /**
     * 错误描述
     */
    message: string;

}