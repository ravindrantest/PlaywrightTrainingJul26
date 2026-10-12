import { test } from "@playwright/test";

test(`Print all console messages`, async ({page}) => {

    page.on('console', message => {
        console.log(`Message >> ${message.type()} and ${message.text()}`);     
    })

    await page.goto("https://leafground.com/dashboard.xhtml");
    await page.waitForTimeout(10000);
})