

import { test } from "@playwright/test";

test("Learn to Handle Dropdown", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    //Backtick = ``

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();

    await page.locator('//a[text()="Leads"]').click();

    await page.locator('//a[text()="Create Lead"]').click();

    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf");

    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Ravindran");

    await page.locator('//input[@id="createLeadForm_lastName"]').fill("R");

    // await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:"Direct Mail"}) // Method1 by using visible text / label

    // await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{value:"LEAD_DIRECTMAIL"}) // Method 2 by using value attribute

    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`, { index: 5 }) // Method 3 by using index of the dropdown

    const dropDownValue = page.locator('//select[@id="createLeadForm_dataSourceId"]/option') //Here the variable dropDownValue holds 13 locator objects

    console.log(await dropDownValue.count());

    const dropDownCount = await dropDownValue.count()



    for (let index = 1; index <= dropDownCount; index++) {

        console.log(await page.locator(`(//select[@id="createLeadForm_dataSourceId"]/option)[${index}]`).innerText())

    }

    console.log(await page.locator(`(//select[@id="createLeadForm_dataSourceId"]/option)[5]`).innerText())

    // console.log(await page.locator(`(//select[@id="createLeadForm_dataSourceId"]/option)[2]`).innerText())

    await page.locator('//input[@name="submitButton"]').click()

    await page.waitForTimeout(5000) // demo


})


/* Dropdown are classified into 2 types:
1. Select Tag
=> value : Most stable because it is connected with the database so the probablity of a developer changing the values is minimal
=> label : We use it in travel portals where a location name is not dynamic hence we use that
=> index : When the position of the the dropdown does not change

2. Non-select Tag
 */