# wdt-sdk
旺店通 node ts sdk
官方文档：https://open.wangdian.cn/qyb/open/apidoc

```
import { Wdt } from '@icoastline/wdt-sdk';

const wdt = new Wdt({
    sid: 'test2',
    appkey: 'test2-xx',
    appsecret: '12345',
    sandbox: true, // 是否开启沙箱环境
})

// 查询店铺
async function shop(){
    const res = wdt.shop({...});
    const shoplist = res.shoplist;
}
```