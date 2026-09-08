

import { test } from "@playwright/test";

test("Learn iframes using playwright", async ({ page }) => {


    // await page.goto("https://leafground.com/frame.xhtml");

    await page.goto("https://developer.servicenow.com/dev.do");


    const allFrames = page.frames();

    //[frame1,frame2,...]

    const frameCount = allFrames.length

    console.log(frameCount);
    /* In frame while automating using playwright the count of frames will be 
    First frame will always be the main webpage + all the other frames present in the DOM
    1+4 => 5
     */

    console.log(await allFrames[0].title());


    for(const frametitle of allFrames){

        console.log(await frametitle.title());
        

    }

})