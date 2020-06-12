import axios, { AxiosRequestConfig } from 'axios';
import { createHash } from 'crypto';
import { Request } from './base';

export function getTimestamp(date?: Date) {
    date = date || new Date();
    return Math.round(date.getTime() / 1000);
}

export function sortObject<T extends Object>(obj: T) {
    const sort = {} as T;
    Object.keys(obj).sort().forEach(function (key) {
        if (![undefined, null, ''].includes(obj[key]))
            sort[key] = obj[key];
    });
    return sort;
}

export function encrypt(k: string, v: string) {
    let kLen = `${Buffer.from(k).toString('utf-8').length}`;
    if (kLen.length < 2) {
        kLen = `00${kLen}`.substr(-2, 2);
    }
    let vLen = `${Buffer.from(v).toString('utf-8').length}`;
    if (vLen.length < 4) {
        vLen = `0000${vLen}`.substr(-4, 4);
    }
    return `${kLen}-${k}:${vLen}-${v}`;
}

export function sign(data: Request, appsecret: string) {
    data = sortObject(data);
    const arr: string[] = [];
    for (const k in data) {
        arr.push(encrypt(k, String(data[k])));
    }
    const str = arr.join(';');
    return createHash('md5').update(str + appsecret).digest('hex').toLowerCase();
}

export async function request<T = any>(url: string, data: any) {
    try {
        const dataArr: string[] = [];
        for (const k in data) {
            dataArr.push(`${k}=${encodeURI(data[k])}`);
        }
        const dataStr = dataArr.join('&');
        const options: AxiosRequestConfig = {
            url, data: dataStr, method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
        const res = await axios.request(options);
        return res.data as any as T;
    } catch (err) {
        throw err;
    }
}