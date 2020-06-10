import { createHash } from 'crypto';

export function clone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function randomString() {
    return Math.random().toString(36).substr(2);
}

export function sortObject<T extends Object>(obj: T) {
    const sort = {} as T;
    Object.keys(obj).sort().forEach(function (key) {
        if (![undefined, null, ''].includes(obj[key]))
            sort[key] = obj[key];
    });
    return sort;
}

export function sign(data: any, appSecret: string) {
    data = sortObject(data);
    const arr: string[] = [];
    for (const k in data) {
        arr.push(encrypt(k, String(data[k])));
    }
    const str = arr.join(';');
    return createHash('md5').update(str + appSecret).digest('hex').toLowerCase();
}

function encrypt(k: string, v: string) {
    let kLen = `${Buffer.from(k).toString('utf-8').length}`;
    if (Number(kLen) < 10) {
        kLen = `00${kLen}`.substr(-2, 2);
    }
    let vLen = `${Buffer.from(v).toString('utf-8').length}`;
    if (Number(vLen) < 1000) {
        vLen = `0000${vLen}`.substr(-4, 4);
    }
    return `${kLen}-${k}:${vLen}-${v}`;
}
