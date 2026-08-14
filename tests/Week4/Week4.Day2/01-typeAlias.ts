

//let username :string = "Playwright"  

//Here I need to handle both string as well as number datatype for the variable username. So I will use type alias to handle this scenario.

type usernameType = string | number; // union type

//Here usernameType is the "new datatype" that we just created to handle both string and number

//Now by using typealais the text box can handle both number as well as string

let username: usernameType = "ravi"
username = 98798789



//* ***************We will also be able to handle type alia for values************ */



//CLient rquirement : chrome, msedge, safari


type supportedBrowsers = "chrome" | "msedge" | "safari"


function browserHandling(browserName: supportedBrowsers) { // browserName is a local varibale/ parameter of the function
    console.log("Launch browser", browserName);
}


browserHandling("msedge")


//Intersection tpe alias we use  "&" symbol:

//while filling a form :

type admin = {
    adminName: string,
    privelges: string
}



type emp = {
    empName: string,
    date: string,
    empId: number
}


//Here qa has the same details to be mandatorily filled like the data filled for admin as well as emp

type qa = admin & emp

const qaProfile: qa = {

    adminName: "Ravindran",
    privelges: "Admin",
    empName: "Ravi",
    date: "08/07/26",
    empId: 789787

}

//"&" checks for datatype as well as the values that qaProfile holds

console.log(qaProfile.adminName)


