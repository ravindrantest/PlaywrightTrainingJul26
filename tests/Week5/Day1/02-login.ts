import { Page } from "@playwright/test";


export class LoginPage {

//Here when you use " " it is a string so we use : string
// When we use page reference that comes from page fixture p656756757 and the type will ne Page interface

    page : Page// global property // Page

    constructor(Tpage:Page) { // explicit inference using Page interface
        this.page = Tpage
    }


    async loadurl() {

        await this.page.goto("http://leaftaps.com/opentaps/control/main");

    }

    async fillCrednetials() {

        await this.page.locator('//input[@id="username"]').fill("democsr2");
        await this.page.locator('//input[@id="password"]').fill("crmsfa");


    }

    async clickSubmit() {

        await this.page.locator('//input[@class="decorativeSubmit"]').click();


    }
}


