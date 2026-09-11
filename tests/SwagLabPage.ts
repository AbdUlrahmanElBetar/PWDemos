import { type Page ,Locator} from "@playwright/test";
import { BasePage} from "./BasePage";


 export class PageClass extends BasePage{

    constructor(readonly page : Page){
        super(page);
    }

    async open(): Promise<void> {
        await super.open();
        await this.page.getByPlaceholder("Username");
        await this.page.getByPlaceholder("Password");
    }

    async  enterUserName():Promise<void>{
        await this.page.getByPlaceholder("Username").clear;
        await this.page.getByPlaceholder("Username").fill("error_user");
    }
    async enterPassword():Promise<void>{
        await this.page.getByPlaceholder("Password").clear;
        await this.page.getByPlaceholder("Password").fill("secret_sauce");
    }

    async clickOnLoginBtn():Promise<void>{
        await this.page.getByRole("button", { name: "Login" }).click();
    }

    async loginUser():Promise<void>{
        await this.enterUserName();
        await this.enterPassword();
        await this.clickOnLoginBtn();
    }

    get headerLogo():Locator{
        return this.page.getByText("Swag Labs");
    }
   
 }