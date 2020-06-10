import axios, { AxiosRequestConfig } from 'axios';

class WdtStatic {

    static sandbox = false;
    static host = 'http://api.wangdian.cn/openapi2';
    static sandboxHost = 'http://sandbox.wangdian.cn/openapi2';

    static getHost() {
        return !this.sandbox ? this.host : this.sandboxHost;
    }

    static async request<T = any>(path: string, data: any) {
        try {
            const options: AxiosRequestConfig = {
                data,
                method: 'POST',
                url: this.getHost() + path,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
            const res = await axios.request(options);
            return res as any as T;
        } catch (err) {
            throw err;
        } finally {

        }
    }
}

export class Wdt {

    sid: string = '';
    appKey: string = '';

    constructor(sid: string, appKey: string) {
        this.sid = sid;
        this.appKey = appKey;
    }
}