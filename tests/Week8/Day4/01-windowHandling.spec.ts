
//Window Handling :


import { test } from "@playwright/test";

test("Learn window handling-Sequential way of window handling", async ({ page, context }) => {

    await page.goto("https://www.flipkart.com/");

    const searchBox = page.getByPlaceholder("Search for Products, Brands and More", { exact: true }).first();

    await searchBox.fill("iPhone");

    await searchBox.press("Enter"); // Ones after 15th line we get a list of products in the same page

    //listner placed before an action being performed

    //Sequential way of window handling

    // const windowPromise = context.waitForEvent("page") //Action1: Listening => We are asking playwright to capture the page that gets poped up ones we click on a product from the product list

    // await page.getByText("Apple iPhone 17 (Black, 256 GB)", { exact: true }).click(); // Action2 :CLicking=> Performing the click action

    // const refChildPage = await windowPromise

    //  await refChildPage.waitForLoadState("domcontentloaded");

    // console.log(await refChildPage.title());

    // console.log(await refChildPage.locator('//div[text()="+₹299 Protect Promise Fee"]/preceding::div[contains(@class,"css-g")]/div[contains(@class,"zwn")]').innerText());

    // await page.bringToFront();

    // console.log(await page.title());

    // await page.locator('//span[text()="Electronics"]').click();

    // await page.waitForTimeout(3000);

    //Concurrent way of window handling

    //await [action1, action2]

    // //Option1 : By using Index

    // const refChildPage = await Promise.all([context.waitForEvent("page"),page.getByText("Apple iPhone 17 (Black, 256 GB)", { exact: true }).click()]) 
    
    // //refChildPage = [Page,void]  //[refChildPage,void]

    //  await refChildPage[0].waitForLoadState("domcontentloaded");

    // console.log(await refChildPage[0].title());

    // console.log(await refChildPage[0].locator('//div[text()="+₹299 Protect Promise Fee"]/preceding::div[contains(@class,"css-g")]/div[contains(@class,"zwn")]').innerText());

    // await page.bringToFront();

    // console.log(await page.title());

    // await page.locator('//span[text()="Electronics"]').click();

    // await page.waitForTimeout(3000);


     // //Option2 : By using Array Destructor : We can ignore the void return type and have onlt Page return type tp the variable

    const [refChildPage] = await Promise.all([context.waitForEvent("page"),page.getByText("Apple iPhone 17 (Black, 256 GB)", { exact: true }).click()]) 
    
    //refChildPage = [Page,void]  //[refChildPage,void]

     await refChildPage.waitForLoadState("domcontentloaded");

    console.log(await refChildPage.title());

    console.log(await refChildPage.locator('//div[text()="+₹299 Protect Promise Fee"]/preceding::div[contains(@class,"css-g")]/div[contains(@class,"zwn")]').innerText());

    await page.bringToFront();

    console.log(await page.title());

    await page.locator('//span[text()="Electronics"]').click();

    await page.waitForTimeout(3000);      

})