import { Wdt } from '../src';

const wdt = new Wdt({
    sid: 'test2',
    appkey: 'test2-xx',
    appsecret: '12345',
    sandbox: false,
    qimen: false
});

async function test() {
    const res = await wdt.shop({})
    console.log(res)
}

test();