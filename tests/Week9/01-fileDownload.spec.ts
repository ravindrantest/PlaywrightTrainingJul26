
///<reference types="node" /> 

import { test } from "@playwright/test";
import path, { dirname } from "path";

test("Learn to file upload", async ({ page }) => {


    await page.goto("https://leafground.com/file.xhtml");

    //Sequeential approah

    // const fileDownPromise = page.waitForEvent("download"); // file downoad listner 

    // await page.locator('//span[text()="Download"]').click();

    // const fDown = await fileDownPromise

    //Concurrent Approach:

    const [fDown] = await Promise.all([page.waitForEvent("download"), page.locator('//span[text()="Download"]').click()])

    //  fDown.saveAs("data/downloadedImage.png"); // Here we have labelled the file that gets downloaded

    //Relative Path:

    //  fDown.saveAs(`data/${fDown.suggestedFilename()}`); // Here we use suggestedFilename() method and template literal along with file download reference to get the original file name during the run time at the time of saving this particular file.

    //Absolute Path
  //  fDown.saveAs(path.join(__dirname,"../../data/absolutepathImage.png"));

   fDown.saveAs(path.join(__dirname, `../../data/${fDown.suggestedFilename()}`))

 // console.log(__dirname);
  
    await page.waitForTimeout(3000)

    /* Notes:
    __dirname => to move the focus to the current directory which is Week9 folder //=> D:\pw_training_Jul26_temp\tests\Week9
    ../ => This moves the control from Week9 to tests
    ../ => Again the control moves from tests to pw_training_Jul26_temp
    /data => moves the control from tests to target folder
    /absolutepathImage.png => we will save the file in the target folder with modified name */


})