

import * as XLSX from "xlsx"

//Simple direct format :

// const workbook = XLSX.readFile("./data/excelData.xlsx");
// const worksheet = workbook.Sheets["Sheet1"];

// const data = XLSX.utils.sheet_to_json(worksheet) // this is to convert the excel file data to "json"


// console.log(data);

// /* 
// Inside an array we have in key value pair json format
// [ { username: 'democsr', password: 'crmsfa' } ] */


//Writing read excel into a function block

function getExcelData(){
const workbook = XLSX.readFile("data/excelData.xlsx");
const worksheet = workbook.Sheets["Sheet1"];

return XLSX.utils.sheet_to_json(worksheet)


}

const loginData : any = getExcelData()

console.log(loginData[0].username);
console.log(loginData[0].password)


import { test } from "@playwright/test";

for(const data of loginData){

test("Learn to Handle Dropdown", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill(data.username);

    await page.locator('//input[@id="password"]').fill(data.password);

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();


})


}


