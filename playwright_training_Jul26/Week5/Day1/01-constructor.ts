

/*Steps to automate an application :

1. Launch a browser
2. Load URL.
3, Fill credendentials
4. Click submit button
*/

//Assign a value thorugh property declared locally

//Parameterized methods :

// class LoginPage1 {

//     //  browser = "chrome" => declaring a property globally inside a class => method1

//     launch(browser: string) { // actionables in a class

//         console.log("Launching the browser ", browser);

//     }

//     //  url = "google.com"

//     loadurl(url: string) { // method - 2 of assiging a value to a variable by passing the value at the time of calling of a method using an object

//         console.log("Loading the url", url);

//     }

//     fillCredential(username: string, password: string) {

//         console.log(`Fill the username and password",${username}  and ${password}`);

//     }

//     clickSubmit() {

//         console.log("Click Submit button");


//     }

// }

// const logobj = new LoginPage1()

// logobj.launch("chrome") // callng the methods using an object of a class
// logobj.loadurl("www.amazon.com")
// logobj.fillCredential("ravi@test.com", "1234")
// logobj.clickSubmit()

/* ************************************************************************************ */

//normal constructor



// class LoginPage2 {

//     url : string // declaration alone done globally

//     //  url = "google.com" // the value assigned to url should be the first thing that has to happen within this block of code

//     loadurl() { // method - 2 of assiging a value to a variable by passing the value at the time of calling of a method using an object

//         console.log("Loading the url", this.url);

//     }

//     fillCredential(username: string, password: string) {

//         console.log(`Fill the username and password in ",${this.url} ${username}  and ${password}`);

//     }


//     constructor(){

//             this.url = "google.com"  // here method 1 : calling the constructor so that value of the url is assigned first before invoking al the other methods in a claa

//              console.log("the url assigned is ", this.url);
//         }


// }

// new LoginPage2() // here when you create an object using "new" the special method called constructor gets invoked automatically 


/* ************************************************************************************ */

//parameterized constructor



class LoginPage3 {

    url: string // declaration alone done globally

    //  url = "google.com" // the value assigned to url should be the first thing that has to happen within this block of code

    loadurl() { // method - 2 of assiging a value to a variable by passing the value at the time of calling of a method using an object

        console.log("Loading the url", this.url);

    }

    fillCredential(username: string, password: string) {

        console.log(`Fill the username and password in ",${this.url} ${username}  and ${password}`);

    }


    constructor(localurl:string) { // localurl is a parameter


        //here url is a globall variable 

        this.url = localurl // calling the constructor so that value of the url which a globally declared variable is assigned first before invoking al the other methods in a claa

        console.log("the url assigned is ", this.url);
    }


}

const loginPage3Obj = new LoginPage3("google.com") // argument //here when you create an object using "new" the special method called constructor gets invoked automatically 
loginPage3Obj.loadurl();
loginPage3Obj.fillCredential("ravi@test.com","1234")