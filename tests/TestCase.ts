import {test , expect , type Page , type Locator } from "@playwright/test"


class todoPage{

    public static readonly url = "https://demo.playwright.dev/todomvc/#/" ;

    public readonly page: Page ;
    public readonly testInput :Locator;
    public readonly testItems :Locator

    constructor(page :Page){
        this.page = page;
        this.testInput = page.getByPlaceholder("What needs to be done?");
        this.testItems = page.getByTestId("todo-item");
    }


   public async open ():Promise<void>{
    await this.page.goto(todoPage.url);
    }

    public async fillData(title : string):Promise<void>{
       await this.testInput.fill(title);
       await this.testItems.press("Enter");
    }
}


test ("Adds ToDO Items ", async ({ page }) => {

   const todo = new todoPage(page);

   await todo.open();
   await todo.fillData("Abdulrahman");
    
    await expect(todo.testItems).toHaveCount(1);
    await expect(todo.testItems).toContainText("Abdulrahman");
})