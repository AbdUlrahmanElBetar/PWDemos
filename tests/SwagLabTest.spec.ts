import test, { expect, Locator, type Page } from "@playwright/test";
import { PageClass } from "./SwagLabPage";

test.use({
  launchOptions: { slowMo: 1200 },
});



 test("Login Swag Labs Site ",async({page}) => {
    
    let swagPage = new PageClass(page);

    await swagPage.open();
    await swagPage.loginUser();

    await expect(swagPage.headerLogo).toBeVisible();
}) 


 