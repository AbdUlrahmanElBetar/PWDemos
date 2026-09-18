import { expect, type Page ,test } from "@playwright/test";
import { OrderFlowPage } from "./order-flow.page.ts"
import { faker } from '@faker-js/faker';
test.use({
    launchOptions: { slowMo: 800 },
});

test(" E2E User Flow  " , async ({page}) =>{

    const epage = new OrderFlowPage(page);
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password({ length: 10, prefix: 'Test@1' });
    const randomPhoneNumber = faker.string.numeric(10);


    await epage.openRahulRegSite();
    await epage.fillRegData("Abdulrahman","Ali",randomEmail,randomPhoneNumber,"Engineer",randomPassword,randomPassword);
    await epage.clickRegBtn();

    await expect(epage.successMsgVisibility()).toBeTruthy();

    await epage.getInLoginScreen();

    await epage.enterLoginCred(randomEmail,randomPassword);
    await epage.clickLoginBtn();

    await epage.addProductToCart("ZARA COAT 3");
    await epage.verifyCartCount('1');

    await epage.clickOnCart()

    await epage.clickOnCheckOut();
    await epage.fillCVV("552")
    await epage.fillNameOnCard("3Booooooood")
    await epage.fillCoupon("3ooooooBD")
    
})