
//Window Handling :


import { test } from "@playwright/test";

test("Learn window handling-Sequential way of window handling", async ({ page, context }) => {

    await page.goto("https://www.flipkart.com/");

    const searchBox = page.getByPlaceholder("Search for Products, Brands and More", { exact: true }).first();

    await searchBox.fill("iPhone");

    await searchBox.press("Enter"); // Ones after 15th line we get a list of products in the same page

    const [refChildPage] = await Promise.all([context.waitForEvent("page"),page.getByTestId("MOBHQV9YCUG4ZQZK").click()]) 
    
    //refChildPage = [Page,void]  //[refChildPage,void]

     await refChildPage.waitForLoadState("domcontentloaded");

    console.log(await refChildPage.title());

  //  console.log(await refChildPage.locator('//div[text()="+₹299 Protect Promise Fee"]/preceding::div[contains(@class,"css-g")]/div[contains(@class,"zwn")]').innerText());

    await page.bringToFront();

    console.log(await page.title());

    await page.locator('//span[text()="Electronics"]').click();

    await page.waitForTimeout(3000);      

})