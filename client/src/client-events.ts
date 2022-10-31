import * as alt from 'alt-client';

const PAGE_NAME = 'OSS_ShopUI';

alt.onServer(`${PAGE_NAME}:Client:OpenShop`, (shopItems: {}[], type: string) => {
    alt.emit(`${PAGE_NAME}:Vue:Open`, shopItems, type);
    return;
});
