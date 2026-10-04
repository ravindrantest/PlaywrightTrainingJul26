import { devices, test } from "@playwright/test";

test.use({...devices["iPhone 13"]})

test("Device Emulation",async ({page}) => {

    await page.goto("https://www.amazon.in/");

    await page.waitForTimeout(3000)
})