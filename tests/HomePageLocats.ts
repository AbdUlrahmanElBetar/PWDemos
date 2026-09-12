import { type Page , Locator } from "@playwright/test";
import { BasePageLocators } from "./BasePageLocators";

export class HomePage extends BasePageLocators {
    constructor(readonly page:Page) {super(page) }

    async openHomeScreen(): Promise<void> {
     await   super.openHomeScreen()
    }

     async  enterName(name:string ):Promise<void>{
     //await this.page.locator('form input[name="name"]').fill(name);
       await this.page.locator('form').locator('input[name="name"]').fill(name);

    }
//Enter
    async enterEmail(email:string):Promise<void>{
    //await this.page.locator('form input[name="email"]').fill(email);
    await this.page.locator('form').locator('input[name="email"]').fill(email);

    }

    async enterPassword( password:string):Promise<void>{
        await this.page.getByRole("textbox",{name:"Password"}).fill(password);
    }

    async checkIceCreamBox():Promise<void>{
        await this.page.getByText("Check me out if you Love IceCreams!").check();
    }

    async ChooseGender(gender:string):Promise<void>{
        await this.page.getByLabel("Gender").selectOption(gender);  
    }

    async chooseEmpStatus():Promise<void>{
        await this.page.getByRole("radio",{name:"Employed"}).check();
    }

    async clickOnSubmitBtn():Promise<void>{
        await this.page.getByRole("button",{name:"Submit"}).click();
    }

    async getScssMsg(): Promise<boolean> {
    return await this.page.getByRole('alert').isVisible();
}

}