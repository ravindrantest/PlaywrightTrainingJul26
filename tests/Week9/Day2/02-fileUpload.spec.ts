

/* Notes:
File Upload 2 ways:
1.Automating fileupload when we have input tag and type="file" attribute

2. Automating fileupload when we dont have input tag and type="file" attribute*/


import { test } from "@playwright/test";
import path from "path";

test("Learn File Upload using Input Tag and type='file' @smoke", async ({ page }) => {

    await page.goto("https://leafground.com/file.xhtml");

    //  await page.locator('//input[@type="file"]').first().setInputFiles("data/downloadedImage.png");

 //   await page.locator('//input[@type="file"]').first().setInputFiles(path.join(__dirname, "../../data/TestLeaf Logo.png"));

 //Mutiple files

  await page.locator("//input[@type='file']").last().setInputFiles([path.join(__dirname, "../../data/TestLeaf Logo.png"),path.join(__dirname, "../../data/downloadedImage.png")]);
 
    await page.waitForTimeout(3000);

})



test("Learn File Upload when we dont have Input Tag and type='file' @regression", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const fileUploadPromise = page.waitForEvent("filechooser"); // file downoad listner 

    await page.locator('//div[@id="drag-drop-upload"]').click();

    const fUpload = await fileUploadPromise

    // await fUpload.setFiles("data/downloadedImage.png")

    await fUpload.setFiles(path.join(__dirname,"../../data/absolutepathImage.png"))

    await page.waitForTimeout(3000);

})
