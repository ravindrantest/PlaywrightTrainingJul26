

import { test } from "@playwright/test"

test("Learn playwright locators", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    //   await page.locator('[id="username"]').fill("ravindran.ramdas@testleaf.com"); // css

    // await page.getByRole("textbox", { name: "Username" }).fill("ravindran.ramdas@testleaf.com"); //playwright locators : getByRole()

    await page.getByLabel("Username",{exact:true}).fill("ravindran.ramdas@testleaf.com"); // getByLabel()

 //   await page.getByRole("textbox", { name: "Password" }).fill("Ravi@testleaf#123"); //playwright locators : getByRole()

     await page.getByLabel("Password",{exact:true}).fill("Ravi@testleaf#123"); // getByLabel()

    await page.getByRole("button",{name:"Log In"}).click();

    await page.waitForTimeout(3000)


})