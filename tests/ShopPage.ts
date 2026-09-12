import { BasePageLocators } from "./BasePageLocators";
import { type Page , expect } from "@playwright/test";

export class ShopPage extends BasePageLocators{
    constructor(page:Page) {
        super(page);
    }

    async openShopScreen(){
     await   super.openShopScreen();
    }

    async addIphoneX():Promise<void>{
        await this.page.locator("app-card").
        filter({hasText:"iphone X"}).
        getByRole("button",{name:"Add "}).
        click();
    }

    async addBlackberry():Promise<void>{
        await this.page.locator("app-card").
        filter({hasText:"Blackberry"}).
        getByRole("button",{name:"Add "}).
        click();
    }

    async assertCheckOut():Promise<void>{
       await expect(this.page.getByText(/Checkout\s*\(\s*2\s*\)/))
    .toBeVisible();
    }
}