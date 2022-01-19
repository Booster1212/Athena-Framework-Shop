import athenaVendingMachines from '../../../shared/information/vendingMachines';
import IShop, { ShopType } from './interfaces/IShop';
import { ltdLocations } from './shopLists/ltd';
import { robsLiquorLocations } from './shopLists/robsLiquor';
import { vanillaUnicornLocations } from './shopLists/vanillaUnicorn';
import { bahamaMamasLocations } from './shopLists/bahamaMamas';
import { tequiLaLaLocations } from './shopLists/tequiLaLa';
import { ammunationLocations } from './shopLists/ammunation';
import { toolShopLocations } from './shopLists/toolShop';
import { liquorAceLocations } from './shopLists/liquorAce';
import { juiceLocations } from './shopLists/juice';
import { sellerExampleLocations } from './shopLists/sellerExample';
import { coreShopLocations } from './shopLists/coreShops';

export const ShopRegistry: IShop[] = [
    /* {
        name: 'Vending machine',
        dbName: 'VendingMmachine',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        interactionRange: 1,
        data: {
            items: [{ dbName: 'burger', price: 50 }],
        },
        locations: athenaVendingMachines,
    }, */
    {
        name: '24/7 Shop',
        dbName: '24-7-Shop',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                { dbName: 'bread', price: 75 },
                { dbName: 'Shophotdog', price: 375 },
                { dbName: 'Shopwater', price: 250 },
                { dbName: 'Shopcola', price: 250 },
                { dbName: 'Shopenergy', price: 300 },
            ],
        },
        locations: coreShopLocations,
    },
    {
        name: 'Seller Example',
        dbName: 'SellerExample',
        ShopType: ShopType.SELL,
        blipSprite: 52,
        blipColor: 1,
        blipScale: 1,
        data: {
            items: [{ dbName: 'burger', price: 330 }],
        },
        locations: sellerExampleLocations,
    },
    {
        name: 'LTD',
        dbName: 'LTD',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: ltdLocations,
    },
    {
        name: 'Robs Liquor',
        dbName: 'RobsLiquor',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: robsLiquorLocations,
    },
    {
        name: 'Juice',
        dbName: 'Juice',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: juiceLocations,
    },
    {
        name: 'Liquor ACE',
        dbName: 'LiquorACE',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: liquorAceLocations,
    },
    {
        name: 'Tool Shop',
        dbName: 'ToolShop',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: toolShopLocations,
    },
    {
        name: 'Ammunation',
        dbName: 'Ammunation',
        blipSprite: 110,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                { dbName: 'Pistol', price: 50000 },
                { dbName: 'Railgun', price: 500000 },
            ],
        },
        locations: ammunationLocations,
    },
    {
        name: 'Tequi-la-la',
        dbName: 'Tequi-la-la',
        blipSprite: 93,
        blipColor: 48,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: tequiLaLaLocations,
    },
    {
        name: 'Bahama Mamas',
        dbName: 'BahamaMamas',
        blipSprite: 93,
        blipColor: 48,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: bahamaMamasLocations,
    },
    {
        name: 'Vanilla Unicorn',
        dbName: 'VanillaUnicorn',
        blipSprite: 93,
        blipColor: 48,
        blipScale: 1,
        data: {
            items: [
                // {dbName: 'burger', price: 20},
                // {dbName: 'bread', price: 20},
                // {dbName: 'repair-kit', price: 20}
            ],
        },
        locations: vanillaUnicornLocations,
    },
];
