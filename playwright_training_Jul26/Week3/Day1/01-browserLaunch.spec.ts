/* 
Essential for playwright Automation
1. Browser => chromium
2. Window => Browser Context
3. Page */


import { chromium, test } from "@playwright/test"

//test("title",body / test logic)

test("Launch a browser", async () => { // We are putting the playwright browser launch code in async function 

    const browser = await chromium.launch() // browser is a userdefined variable to store the reference of a browser

    const context = await browser.newContext() // context is like a window in a browser with isolated env. behabiour

    const page = await context.newPage() // Opening an empty/blank page using a window

    await page.goto("https://leaftaps.com/opentaps/control/main");

    const url = page.url();

    console.log(url);

    const pagetitle = await page.title()

    console.log(pagetitle);

    await page.waitForTimeout(5000) // pause for demo purpose


})


/* Three stages of promise :
1. Pending
2. resolve => allows the control to go to the next step
3. reject => stops the contol to go to the next step*/
