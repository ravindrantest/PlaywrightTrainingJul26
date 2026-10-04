import { test } from "@playwright/test";

test.use({
    geolocation:{
        latitude:50.1213583,
        longitude:8.4717519
    },
    permissions:["geolocation","notifications"]
})

test("Geo Location Learning in playwright",async ({page}) => {

    await page.goto("https://www.google.com/maps");

    await page.locator('.sVuEFc').first().click();

    await page.waitForTimeout(8000)
})