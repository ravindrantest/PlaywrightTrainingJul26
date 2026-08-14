

import { chromium, test } from "@playwright/test"

//test("title",body / test logic)

test("Launch a browser", async ({ page }) => { // We are putting the playwright browser launch code in async function 

    // const browser = await chromium.launch() // browser is a userdefined variable to store the reference of a browser

    // const context = await browser.newContext() // context is like a window in a browser with isolated env. behabiour

    // const page = await context.newPage() // Opening an empty/blank page using a window

    await page.goto("https://leaftaps.com/opentaps/control/main");


    // await page.locator('#username').fill("democsr2"); // option1
    //  await page.locator('input').nth(0).fill("democsr2");
    await page.locator('input').first().fill("democsr2");

    //await page.locator('#password').fill("crmsfa");

    await page.locator('input').nth(1).fill("crmsfa");

    //  await page.locator('.decorativeSubmit').click();
    // await page.locator('input').nth(2).click()
    await page.locator('input').last().click()

    await page.waitForTimeout(8000) // pause for demo purpose

})