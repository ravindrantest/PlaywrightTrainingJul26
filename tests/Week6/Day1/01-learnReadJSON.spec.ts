

//WHat is JSON?
// Java Script Object Notation 
/*

[0,1] here 0=> 1st set of data TC001 and 1=>2nd set of data TC002
[
{
"TestCaseNo":"TC001",
"Username":"ravindran.ramdas@testleaf.com",
"Password":"Ravi@testleaf#123"
},
{
"TestCaseNo":"TC002",
"Username":"ravindran.ramdas@testleaf.com",
"Password":"Ravi@testleaf#123"
}
] */



import { test } from "@playwright/test"
import credentials from "../../../data/login.json";

// console.log(`This data without for loop ${credentials[0].Username}`);
// console.log(`This data without for loop ${credentials[0].Password}`);

// console.log(`This data without for loop ${credentials[1].Username}`);
// console.log(`This data without for loop ${credentials[1].Password}`);


// for(let index=0;index<credentials.length;index++){

// console.log(`This data with for loop ${credentials[index].Username}`);
// console.log(`This data with for loop ${credentials[index].Password}`);

// }

test.describe.serial('This is a serial execution', async () => {

    for (let i = 0; i < credentials.length; i++) {

        test(`Learn to Read JSON ${credentials[i].TestCaseNo}`, async ({ page }) => {

            /*  We can avoid this error by using template literal in the title of the test
        Error: duplicate test title "Learn playwright locators", first declared in Week6\Day1\01-learnReadJSON.spec.ts:43 */

            await page.goto("https://login.salesforce.com/?locale=in");

            //    await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com"); // getByLabel()

            await page.getByLabel("Username", { exact: true }).fill(credentials[i].Username); // getByLabel()

            await page.getByRole("button", { name: "Log In" }).click();

            await page.getByLabel("Password", { exact: true }).fill(credentials[i].Password); // getByLabel()

            await page.getByRole("button", { name: "Log In" }).click();

            await page.waitForTimeout(3000)


        })

    }
})




/* Internally it takes as 2 tests

test("Learn to Read JSON TC001", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    //    await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com"); // getByLabel()

    await page.getByLabel("Username", { exact: true }).fill(credentials[0].Username); // getByLabel()

    await page.getByRole("button", { name: "Log In" }).click();

    await page.getByLabel("Password", { exact: true }).fill(credentials[0].Password); // getByLabel()

    await page.getByRole("button", { name: "Log In" }).click();

    await page.waitForTimeout(3000)


})
    
test("Learn to Read JSON TC002", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    //    await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com"); // getByLabel()

    await page.getByLabel("Username", { exact: true }).fill(credentials[1].Username); // getByLabel()

    await page.getByRole("button", { name: "Log In" }).click();

    await page.getByLabel("Password", { exact: true }).fill(credentials[1].Password); // getByLabel()

    await page.getByRole("button", { name: "Log In" }).click();

    await page.waitForTimeout(3000)


})*/