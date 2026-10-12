import { expect, test } from "@playwright/test";

test.only(`Visual testing`,async ({page}) => {
    
    await page.goto(`https://www.caratlane.com/jewellery/star-gaze-kids-gold-stud-earrings-ue06535-1y0000.html`);

    await page.waitForTimeout(5000)

    const oldScreenShot = await page.screenshot({path:'screenShot/amazonwebpage.png'});

    expect(oldScreenShot).toMatchSnapshot("caratlane.png")
})