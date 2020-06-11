import { Wdt } from '../src';

const wdt = new Wdt({
    sid: 'test2',
    appkey: 'test2-xx',
    appsecret: '12345',
    sandbox: true
});

async function test() {
    const res = await wdt.purchaseProviderQuery({ column: '' })
    if (res.code !== 0) {
        console.log(res.message)
    }
}

test();