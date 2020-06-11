import * as base from './base';
import * as basic from './base/basic';
import { getTimestamp, request, sign } from './utils';

const HOST = 'http://api.wangdian.cn/openapi2';
const SANDBOX_HOST = 'http://sandbox.wangdian.cn/openapi2';

function buildReqData(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (data: base.Request) {
        const { sid, appkey, appsecret } = this as Wdt;
        data = { ...data, sid: sid, appkey: appkey, timestamp: getTimestamp() };
        data.sign = sign(data, appsecret);
        return original.apply(this, [data]);
    }
}

export class Wdt {

    host = '';
    sid: string = '';
    appkey: string = '';
    appsecret: string = '';

    constructor(opt: { sid: string, appkey: string, appsecret: string, sandbox?: boolean }) {
        this.sid = opt.sid;
        this.appkey = opt.appkey;
        this.appsecret = opt.appsecret;
        this.host = opt.sandbox ? SANDBOX_HOST : HOST;
    }

    @buildReqData
    async shop(data: basic.shop.Request) {
        return await request<basic.shop.Response>(this.host + basic.shop.path, data);
    }

    @buildReqData
    async warehouseQuery(data: basic.warehouseQuery.Request) {
        return await request<basic.warehouseQuery.Response>(this.host + basic.warehouseQuery.path, data);
    }

    @buildReqData
    async logistics(data: basic.logistics.Request) {
        return await request<basic.logistics.Response>(this.host + basic.logistics.path, data);
    }

}

