

import { test } from "@playwright/test";

test("Learn to interact with elements inside iframe",async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");

    const frameRef =  page.frameLocator('[src="default.xhtml"]'); // Step 1 : Identify the target frame from the page out of mutiple frames

    await frameRef.locator('//button[@id="Click"]').click() // Step 2 : Using the frameRef playwright will be able to locate the element present inside the frame
    
    await page.waitForTimeout(3000)
});


test.only("Learn to interact with elements inside nested iframe",async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");

    const outerframeRef =  page.frameLocator('[src="page.xhtml"]'); // Step 1 : Identify the outerframe from the page out of mutiple frames

    const innerframeRef = outerframeRef.frameLocator('[id="frame2"]') // Step2 : TO navigate the innerframe using the reference of the outerframe

    await innerframeRef.locator('//button[@id="Click"]').click() // Step 2 : Using the frameRef playwright will be able to locate the element present inside the frame
    
    await page.waitForTimeout(3000)
})