

import { expect, test } from "@playwright/test";

test("Learn Storage State in Playwright", async ({ page,context }) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    const logoVisibility = await page.getByAltText("Salesforce login").isVisible();

    console.log(logoVisibility);

    expect(page.getByAltText("Salesforce login")).toBeVisible();
    
    await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com")

    await page.getByRole("button", { name: "Log In" }).click();

    await page.getByLabel("Password", { exact: true }).fill("Ravi@testleaf#123"); // tag name

    await page.getByRole("button", { name: "Log In" }).click();

    await context.storageState({path:"data/salesforceLogin.json"}); 

    await page.getByTitle("App Launcher",{exact:true}).click(); // getByTitle will be looking for "title" attribute-name in the DOM

// save the cookies=> key:value pair of data as .json file

    await page.waitForTimeout(3000); // demo purpose


})