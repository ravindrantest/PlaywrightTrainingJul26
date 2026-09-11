

import { test } from "@playwright/test";

test("Learn to handle alerts in playwright", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");


     //Listen to this important topic

     page.on("dialog",async (allalert) => {

        //1. simple alert
        console.log(allalert.type()); // To view the type of alert we use the method called type()

     //  await allalert.accept(); //Here just by adding .accept() all the alerts will be handled by clicing the "OK" button
      // await allalert.dismiss(); //Here just by adding .dismiss() all the alerts will be handled by clicing the "Cancel" button
        
        if (allalert.type()==="prompt") {
         await allalert.accept("Ravindran");   
        }else{
            await allalert.dismiss();
        }

     }) // Listener

     await page.locator('//span[text()="Show"]').first().click(); //Action=> Teaching important concept

    // const firstAlertRef = page.locator(".card").filter({ hasText: " Alert (Simple Dialog)" }); // To use filter method find the .card container and narrow down the choices
    // await firstAlertRef.locator('//span[text()="Show"]').click();
    // await page.waitForTimeout(3000);

    const secondAlertRef = page.locator(".card").filter({ hasText: " Alert (Confirm Dialog)" }); // To use filter method find the .card container and narrow down the choices
    await secondAlertRef.locator('//span[text()="Show"]').click();
    await page.waitForTimeout(3000);

    const thirdAlertRef = page.locator(".card").filter({ hasText: " Alert (Prompt Dialog)" })
    await thirdAlertRef.locator('//span[text()="Show"]').click();
    await page.waitForTimeout(3000);

    //.card ? has 7 choices out of which we can narrow down our choices by using filter({hasText:""})


   
})


/* Notes:

1, When we dont have a listner playwright will take control over the alerts and click OK button in simple alert 
when we dont have choices and when we have 2 choices like "OK" and "Cancel" playwright will choose cancel button the cancel button

2, When we add a listner before the action is being performed (here clicking the alert) playwright will make itself ready to capture those alerts.
So every time a new alert pops up the alert is pushed into the arrow function(callback function) so that we can handle those alerts using various methods like:
a. type() => To get the type of the alert
b. accept() => To accept(OK button) that button
c. dismiss()=>To dismiss(Cancel button) that button 
d. message() => To retreive the message of the alert*/