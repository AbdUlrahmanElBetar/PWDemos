import { BasePage } from "./BasePage";
import { type Page , Locator , expect } from "@playwright/test";


export class OrderFlowPage extends BasePage {
    constructor(readonly page:Page) {super(page) }

    async openRahulRegSite(): Promise<void> {
        await super.openRahulRegSite();
    }

   private async enterFName(firstName: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
}

private async enterLName(lastName: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
}
    private async enterEmail( email:string):Promise<void>{
        await this.page.getByRole("textbox",{name :"email"}).fill(email);
    }

    private async enterPhoneNumber( phoneNumber:string):Promise<void>{
        await this.page.getByPlaceholder("enter your number").fill(phoneNumber);
    }

    private async choooseOccupation( occupation:string):Promise<void>{
        await this.page.locator('select[formcontrolname="occupation"]').selectOption({ label: occupation }); 
    }

    private async enterPassword( password:string):Promise<void>{
        await this.page.locator('#userPassword').fill(password);
    }

   private  async enterConfirmPassword( confirmPassword:string):Promise<void>{
        await this.page.getByPlaceholder("Confirm Passsword").fill(confirmPassword);
    }

    private async checkAgeValidation():Promise<void>{
        await this.page.locator('input[formcontrolname="required"]').check(); 
    }

    async fillRegData(firstName:string,lastName:string ,email:string ,phoneNumber:string,occupation:string,password:string,confirmPassword:string):Promise<void>{
      await this.enterFName(firstName);
      await this.enterLName( lastName);
       await this.enterEmail( email);
       await this.enterPhoneNumber( phoneNumber);
       await this.choooseOccupation( occupation);
       await this.enterPassword( password);
       await this.enterConfirmPassword( confirmPassword);
       await this.checkAgeValidation();
    }

    async clickRegBtn():Promise<void>{
        await this.page.locator('input[id="login"]').click(); 
    }

    async successMsgVisibility():Promise<boolean>{
        return await this.page.getByRole('heading', { name: 'Account Created Successfully' }).isVisible();
    }

    async getInLoginScreen():Promise<void>{
        await this.page.getByRole("button",{ name: 'Login', exact: true }).click();
    }

    private async enterLoginEmail(email :string):Promise<void>{
        await this.page.getByPlaceholder("email@example.com").fill(email);
    }

    private  async enterLoginPassword(password:string):Promise<void>{
        await this.page.getByPlaceholder("enter your passsword").fill(password);
    }

    async enterLoginCred(email :string,password:string):Promise<void>{
        await this.enterLoginEmail(email);
        await this.enterLoginPassword(password);
    }

    async clickLoginBtn():Promise<void>{
        await this.page.getByRole("button",{name:"Login"}).click();
    }

     async addProductToCart(productName: string): Promise<void> {
    await this.page.locator('.card-body')
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Add To Cart' })
        .click();
    }

    async verifyCartCount(expectedCount: string): Promise<void> {
    const cartBadge = this.page.locator('button', { hasText: 'Cart' }).locator('label');
    await expect(cartBadge).toHaveText(expectedCount, { timeout: 10000 });
    }

    async clickOnCart(): Promise<void> {
    await this.page.locator('button[routerlink="/dashboard/cart"] label').click();
    }

    async clickOnCheckOut():Promise<void>{
        await this.page.getByRole("button",{name:"Checkout"}).click();
    }

    async fillCVV(cvv: string): Promise<void> {
    await this.page.locator('.field.small')
        .filter({ hasText: 'CVV Code' })
        .locator('input')
        .fill(cvv);
    }

    async fillNameOnCard(cardHolderName: string): Promise<void> {
    await this.page.locator('.field')
        .filter({ hasText: 'Name on Card' })
        .locator('input')
        .fill(cardHolderName);
}

    async fillCoupon( couponCode: string): Promise<void> {
   await this.page.locator('.field.small')
        .filter({ hasText: 'Apply Coupon' })
        .locator('input')
        .fill(couponCode);
    }

}
