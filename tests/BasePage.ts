import { type Page } from "@playwright/test";

 export class BasePage{

    constructor(readonly page:Page){}
    
    async open():Promise<void>{
        await this.page.goto("https://www.saucedemo.com/")
    }

    async openRahulRegSite():Promise<void>{
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/register")
    }
 }