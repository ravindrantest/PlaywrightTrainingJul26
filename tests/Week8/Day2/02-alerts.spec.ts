

import { test } from "@playwright/test";

test("Learn to handle alerts in playwright", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

     await page.locator('//span[text()="Show"]').first().click();

    // const firstAlertRef = page.locator(".card").filter({ hasText: " Alert (Simple Dialog)" }); // To use filter method find the .card container and narrow down the choices
    // await firstAlertRef.locator('//span[text()="Show"]').click();
    // await page.waitForTimeout(3000);

    const secondAlertRef = page.locator(".card").filter({ hasText: " Alert (Confirm Dialog)" }); // To use filter method find the .card container and narrow down the choices
    await secondAlertRef.locator('//span[text()="Show"]').click();
    await page.waitForTimeout(3000);

    const thirdAlertRef = page.locator(".card").filter({ hasText: " Alert (Prompt Dialog)" })
    await thirdAlertRef.locator('//span[text()="Show"]').click();
    await page.waitForTimeout(3000);

    //.card ? has 7 choices out of which we can narrow down our choices by using filter({hasText:""})

})