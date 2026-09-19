import { test } from "@playwright/test"
import credentials from "../../../data/LTlogin.json";


test.describe.serial('This is a serial execution', async () => {


    let data: any // global

    test.beforeAll("This annotation is called only ones before the actual test execution", async () => {

        console.log("BeforeAll Annotation excuted before the actual test execution only ones to connect with DB");

        data = credentials

        console.log(data);
        

    })

    test.beforeEach("BeforEach test we will have login funtionality", async ({ page }) => {

        console.log("BeforeEach Annotation executed before each test module execution");

        await page.goto("http://leaftaps.com/opentaps/control/main");

        await page.locator('//input[@id="username"]').fill(data[0].Username);

        await page.locator('//input[@id="password"]').fill(data[0].Password);

        await page.locator('.decorativeSubmit').click();

        await page.locator('//a[contains(text(),"CRM")]').click()
    })

    //Lead Creation Module
    test(`Lead Creation Module`, async ({ page }) => {

        console.log("Lead Creation Test");

        await page.locator('//a[text()="Create Lead"]').click()

        await page.waitForTimeout(3000)

    })

    //Account Creation Module

    test(`Account Creation Module`, async ({ page }) => {

        console.log("Account Creation Test");

        await page.locator('//a[text()="Create Account"]').click()

        await page.waitForTimeout(3000)

    })
    //afterEach() - AFter Each test module completes its execution the result of each test is collected
    test.afterEach("Fetch the test result of each test", async ({ }, testInfo) => {

        console.log("AfterEach Annotation executed after each test module execution is completed");
        console.log(testInfo.status);

    })

    //afterAll = Push the entire individual test report of each module cumulatively to a test management tool
    test.afterAll("Upload all the test reports at ones", async () => {

        console.log("AfterAll() Executed only ones after all the test modules are executed and reports are collected ");

    })
}
)
