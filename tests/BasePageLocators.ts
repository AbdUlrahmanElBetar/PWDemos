import { type Page } from "@playwright/test";

export class BasePageLocators{
    constructor(readonly page:Page){}

    public async openHomeScreen(){
      await  this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    }

    async openShopScreen(){
        await this.page.goto("https://rahulshettyacademy.com/angularpractice/shop");
    }
}