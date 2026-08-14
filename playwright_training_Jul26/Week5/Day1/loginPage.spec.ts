
import { LoginPage } from "./02-login";

import { test } from "@playwright/test";

test("Login page using POM", async ({ page }) => { // page fixture // page reference that creates a new blank page to load a url

    // await page.goto("")


    const loginPageObj = new LoginPage(page);
    await loginPageObj.loadurl()
    await loginPageObj.fillCrednetials()
    await loginPageObj.clickSubmit()

   // const wpObj = new WelcomePage(page)


})