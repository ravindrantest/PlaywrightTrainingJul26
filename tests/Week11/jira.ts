

/* 
Endpoint : https://manual-testing-demoproject.atlassian.net/rest/api/2/issue

Authorization : 
username : ravindranr90@gmail.com 
password : ATATT3xFfGF0Z1m5ucZ0g19NsRFrLoTjC_5NRZoZ2CS0DRuW_KHC4DS08gb3hxUTxqepCufsgg7da8nRC4IqnGGIOSkwTqegFQPKrXWLu-7PYgKF_WoBBZDtANYA-1DAH64rsTNM76oSOQ5TRBvoa1heBgHNkaVWtObrYocPMSbxkwALh9Hx1AA=F9540E78

Headers :
Content-Type : application/json

Request Body :
{
    "fields": {
        "project": {
            "key": "SJW"
        },
        "issuetype": {
            "name": "Bug"
        },
        "summary":"LoginPageFunctionality",
        "description":"CreatedViaPOSTMAN-LoginButton Not working"
    }
}

*/

import axios from "axios"


async function createJiraIssue() {

const response = await axios.post("https://manual-testing-demoproject.atlassian.net/rest/api/2/issue",

    /***************REQUEST BODY********/
    {
        "fields": {
        "project": {
            "key": "SJW"
        },
        "issuetype": {
            "name": "Bug"
        },
        "summary":"LoginPageFunctionality",
        "description":"CreatedViaPlaywrightAPI-LoginButton Not working"
    }
    },
    /***************HEADER********/
    {
        headers:{
            "Content-Type": "application/json",
        },
        auth:{
            "username":"ravindranr90@gmail.com",
            "password":"ATATT3xFfGF0Z1m5ucZ0g19NsRFrLoTjC_5NRZoZ2CS0DRuW_KHC4DS08gb3hxUTxqepCufsgg7da8nRC4IqnGGIOSkwTqegFQPKrXWLu-7PYgKF_WoBBZDtANYA-1DAH64rsTNM76oSOQ5TRBvoa1heBgHNkaVWtObrYocPMSbxkwALh9Hx1AA=F9540E78"
        }
    }
)   

console.log(response.data);

}

createJiraIssue()


/*  */