

import { test } from "@playwright/test";

test("Interact with frames uing its url", async ({ page }) => {


 //   await page.goto("https://developer.servicenow.com/dev.do");

 await page.goto("https://leafground.com/frame.xhtml")

//  const frameUrlRef = page.frame({url:"https://leafground.com/default.xhtml"}); // frame1 using url

    const frameNameRef = page.frame({name:"frame2"});

 //   const frameUrlRef = page.frame({ url: "https://s.company-target.com/s/sync?exc=lrl" }); // frame2


  //  await frameUrlRef?.locator("#Click").click(); // ? Optional chaining operator

  await frameNameRef?.locator("#Click").click(); // ? Optional chaining operator

    /* if(frame){
    await frameUrlRef.locator("#Click").click();
    } else{
        console.log("Frame not  found")
    }*/

    await page.waitForTimeout(3000)
})