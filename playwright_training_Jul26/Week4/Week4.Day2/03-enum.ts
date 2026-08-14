//enum : Named constant

// in primitive datatype the value will never change when we declare a value using const variable
const user ="url"

//In const the values inside the object can be change

//Non-primitive datatype the values can be changed during the run time
// const url ={
//     dev : "dev@test.com"
// }

// url.dev="qa@test.com"

// console.log(url.dev);


//string enum:

enum appurl {
    "dev" = "dev@test.com"
}

console.log(appurl.dev);


//numeric enum:

enum testResults {
    "pass", // here in numeric enum the value assigned is going be number starts from "0"
    "fail"=6,
    "skip"=5
}

console.log(testResults.skip);


// heterogenous enum

enum testCase {
    "pass"=3, // here in numeric enum the value assigned is going be number starts from "0"
    "fail"="FAILED",
    "skip"=5
}

console.log(testCase.skip);


/*
Points to remember in enumm:
1. In numeric enum if we dont assign a value it will automatically get assigned with index value 0 
2. If we are assigning a string value to a member in the middle of a numeric enum we should explicity assign either a string or a number value to the suceeding enum memebr else it will throw compliation error*/



