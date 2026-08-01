
import { test } from "@playwright/test";

test("Learn to handle dropdown without a Select Tag",async ({page}) => {
    

    await page.goto('https://www.spicejet.com/');

    await page.locator('//div[text()="Currency"]/following-sibling::div').click();

    await page.locator('//div[text()="GBP"]').click()

    await page.waitForTimeout(3000)


})