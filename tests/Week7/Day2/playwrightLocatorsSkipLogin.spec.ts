

import { test } from "@playwright/test";

test.use({ storageState: "data/salesforceLogin.json" });

//Here using test.use=> annotation, the test runner will use the .json file to bypass the login page 

test("Learn Playwright Locators", async ({ page }) => {

    //   await page.goto("https://login.salesforce.com/?locale=in");

    await page.goto("https://testleaf22-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home")

    // await page.locator('//input[@id="username"]').click(); // Normal locator handling

    //  await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com"); // using playwright locator : getByRole()

    // await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com"); // getByLabel will look for label tag

    // await page.getByRole("button", { name: "Log In" }).click();
    // //Here playwrightlocator has two arguments one the type of the webelement and second the name of the button/text/webelement 

    // //await page.getByRole("textbox",{name:"Password"}).fill("Ravi@testleaf#123");

    // await page.getByLabel("Password", { exact: true }).fill("Ravi@testleaf#123")


    // await page.getByRole("button", { name: "Log In" }).click();

    await page.getByTitle("App Launcher", { exact: true }).click(); // getByTitle will be looking for "title" attribute-name in the DOM

    await page.getByText("View All",{exact:true}).click();

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("leads")

    await page.waitForTimeout(3000); // demo purpose


})