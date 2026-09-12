import { test, expect } from "@playwright/test";
import { BasePageLocators } from "./BasePageLocators";
import { type Page } from "@playwright/test";
import { HomePage } from "./HomePageLocats"


test.use({
    launchOptions: { slowMo: 1500 },
});

test("Submit Form ", async ({ page }) => {
    const hPage = new HomePage(page);

    await hPage.openHomeScreen();
    await hPage.enterName("Abdulrahman");
    await hPage.enterEmail("fakeEamil@aa>ccc");
    await hPage.enterPassword("This Is My Password");
    await hPage.checkIceCreamBox();
    await hPage.ChooseGender("Male");
    await hPage.chooseEmpStatus();
    await hPage.clickOnSubmitBtn();
    //Assertion
    await expect(hPage.getScssMsg).toBeTruthy();
})