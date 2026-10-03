//UI PAth 

/* We use page fixture to test UI functionalities
await page.goto();*/


//API PAth

/* We use request fixture to test API functionalities
await request.post()*/


import { test } from "@playwright/test";

let url: any

let token: any

let id: any

test.describe.serial("SERIAL MODE creation of lead after generating token", async () => { // Here we need to group all the test so that it happens in a serial/ sequential way one after the other

    test("Generate token using Playwright with API", async ({ page, request }) => {

        //  await page.goto("") // loading of the url page==> UI testing

        const response = await request.post("https://login.salesforce.com/services/oauth2/token",
            //While passing the headers and form object via network we need to convert to JSON structure and this convertion is called as "SERIALIZATION"
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                form: {
                    "client_id": "3MVG9rZjd7MXFdLhTFd7jYNtTiu5DzDqdNCte5DvFnv7tbIspjQ9CGPizYGUq7h6T69VSmfqxT9yY2NS7tz84",
                    "client_secret": "09FE1EF4BDD93B17821073243A441F8A780A639C21D925B575C1112A3F5E0DBE",
                    "username": "gauthami.vn@testleaf.com",
                    "password": "Qeagle@123",
                    "grant_type": "password" // Format the code using Alt+Shift+f
                }
            }
        )

        const jsonResponseBody = await response.json(); // JSON to Object

        token = jsonResponseBody.access_token

        console.log(token);

        url = jsonResponseBody.instance_url // here let is block scoped sp declaring url globally and assigning the value within the block

        console.log(url);


        /* {
      access_token: '00DgK000007czmP!AQEAQHUxHoS5wTXBWHBiP8upwCsdDTJIHjAtxB4t0a6HppdDoT1c4cNkxUXPlrawBhCjyRVyc6DGfUjJc3NNNLcEv0aOBw8h',
      instance_url: 'https://orgfarm-6d28dcc693-dev-ed.develop.my.salesforce.com',
      id: 'https://login.salesforce.com/id/00DgK000007czmPUAQ/005gK000005F5MOQA0',
      token_type: 'Bearer',
      issued_at: '1791002701749',
      signature: 'Lthn3XkYBbYJp1nkdnsGG1s2m6eggrYEOyHs0DEJhmU='
    } */


    })

    test("Create Lead using Playwright with API", async ({ request }) => {

        const leadResponse = await request.post(`${url}/services/data/v65.0/sobjects/Lead`, {

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: {
                "FirstName": "Ravindran",
                "LastName": "R_PlaywrightTrainingAug26",
                "Company": "Testleaf_2026_WithPlaywrightAPI",
                "Salutation": "Mr."
            }

        })

        const jsonLeadResponse = await leadResponse.json()
        console.log(jsonLeadResponse.id); // 00QgK00000UQeF3UAL

        id = jsonLeadResponse.id



    })


    test("Retrieve lead from salesforce server", async ({ request }) => {

       const retrieveResponse = await request.get(`${url}/services/data/v65.0/sobjects/Lead/${id}`,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )


        console.log(await retrieveResponse.json());
        
    })

})

