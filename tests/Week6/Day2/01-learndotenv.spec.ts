// import { test } from "@playwright/test"
// import credentials from "../../../data/login.json";


//            test(`Learn to Read JSON TestCaseNo}`, async ({ page }) => {

//             /*  We can avoid this error by using template literal in the title of the test
//         Error: duplicate test title "Learn playwright locators", first declared in Week6\Day1\01-learnReadJSON.spec.ts:43 */

//             await page.goto("https://login.salesforce.com/?locale=in");

//             //    await page.getByLabel("Username", { exact: true }).fill("ravindran.ramdas@testleaf.com"); // getByLabel()

//             await page.getByLabel("Username", { exact: true }).fill(credentials[i].Username); // getByLabel()

//             await page.getByRole("button", { name: "Log In" }).click();

//             await page.getByLabel("Password", { exact: true }).fill(credentials[i].Password); // getByLabel()

//             await page.getByRole("button", { name: "Log In" }).click();

//             await page.waitForTimeout(3000)


//         })

import { test } from "@playwright/test"

import dotenv from "dotenv"

//dotenv.config({path:'data/prod.env'}) // This is hard coding

//let filename = "prod" // Again this is hard coding

let filename = process.env.envFileName // $env:envFileName="qa"


//Note : here the process in the 35th line is to read data from the terminal 

dotenv.config({ path: `data/${filename}.env` })

console.log(process.env.USERNAME) // System environment username

console.log(process.env.LF_Username) // qa environment username
console.log(process.env.LF_Password) // qa environment username


//process : object will help you retreive data from a local environment. which is our system environment


/* ************************ACTUAL EXECUTION USING DOTENV*********************************************** */

    test(`Learn to Read DOTENV}`, async ({ page }) => {

        await page.goto(process.env.BaseUrl as string);

        await page.getByLabel("Username", { exact: true }).fill(process.env.LF_Username as string); // getByLabel()

        await page.getByRole("button", { name: "Log In" }).click();

        await page.getByLabel("Password", { exact: true }).fill(process.env.LF_Password as string); // getByLabel()

        await page.getByRole("button", { name: "Log In" }).click();

        await page.waitForTimeout(3000);

    })

