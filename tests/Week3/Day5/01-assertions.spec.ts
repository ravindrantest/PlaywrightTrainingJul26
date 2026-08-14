

import { expect, test } from "@playwright/test";

test("Learn Assertions in Playwright", async ({ page }) => {

    /****************Non-retry assertions********************* // Generic Assertions that just compares the value */

    await page.goto("https://leaftaps.com/opentaps/control/main");

    const heading = await page.locator('//h2[text()="Leaftaps Login"]').innerText(); //Leaftaps Login

    //  expect(heading).toBe("Leaftaps Login"); // Generic Assertions : Exact match

    expect(heading).toContain("Leaftaps"); // Generic Assertions : Substring/partial match 


    /*************** Auto-retry assertions /*************** // locator based assertions that checks on a webelement of an application reties until the specific timeout that can default or custom timeout */

    //page assertions (Auto retry assertions)

    /* page assertions */

    //  await expect(page).toHaveTitle("Leaftaps ",{timeout:8000}); //increasing the assertions timeout by 8000 ms overriding the default timeout of 5000 ms 

    /*/*************** Soft Assertion/*************** : It will help you to not stop/break the execution due to assertion failures */

    //   await expect.soft(page).toHaveTitle("Leaftaps "); //increasing the assertions timeout by 8000 ms overriding the default timeout of 5000 ms 

    await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/main")

    /*/*************** web element locator based asssertions /*************** */

    await expect(page.locator('//input[@id="username"]')).toBeEditable();

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");


    /* ************** CSS color based assertions ***************/

    //   await expect(page.locator('//h2[text()="Leaftaps Login"]')).toHaveCSS('background-color', 'rgb(0, 148, 218)')

    //   await expect(page.locator('//h2[text()="Leaftaps Login"]')).toHaveCSS('background-color', 'rgb(0, 0, 0)')

    await expect(page.locator('//h2[text()="Leaftaps Login"]')).toHaveCSS('color', 'rgb(255, 255, 255)')

    /* ************** Check of validation to return a boolean value ***************/

    const elementCheck = await page.locator('.decorativeSubmit').isEnabled();

    console.log(elementCheck);


    await page.locator('.decorativeSubmit').click({timeout: 8000}); // click on submit button

    await page.waitForTimeout(3000)


})