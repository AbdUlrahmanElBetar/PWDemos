import { type Page ,test } from "@playwright/test";
import { ShopPage } from "./ShopPage";


test.use({
    launchOptions: { slowMo: 1500 },
});

test("Test Add 2 Product " , async ({page}) =>{

    const spage = new ShopPage(page);

   await spage.openShopScreen();
   await spage.addIphoneX();
   await spage.addBlackberry();
   await spage.assertCheckOut();
})