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
// https://open.wangdian.cn/qyb/open/apidoc/doc?path=shop.php
async function shop(){
    // 这里只需传入 业务请求参数 即可
    const res = await wdt.shop({
        shop_no: 'abcd',
        platform: 1,
        page_size: 10,
        page_no: 0,
    });
    const shoplist = res.shoplist;
}
```