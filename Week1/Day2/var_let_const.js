

//Behavior of var, let and const


//Redeclaration in var

// var fName = "Ravindran" // Initilization // declaration => opening a memory location in the name of fName 
// var fName = "Ravi" // again we are trying to open a memory location in the same name 
// var fName = "RavindranR"

// console.log(fName);


/* In other pgm languages you cannot redeclare a variable

int fName = "Ravi"
int fName = "RAvindran"

*/


// Reassignment in var

// var email = "ravindran@test.com";
// email = "ravi"


//Redeclaration in let is not possible just like any other programming language and will throw SyntaxError: Identifier 'course' has already been declared

// let course = "Playwright"
// let course ="PlaywrightTS"
// console.log(coure);


// Reassignment in let is possible like other programming language

let accountBal = 78979879
accountBal = 797987
accountBal = 79879

// console.log(username);

//Redeclaration in const is not possible just like any other programming language and will throw SyntaxError: Identifier 'course' has already

// const accountNum = 68767678687
// const accountNum = 89787897900

// console.log(accountNum);

//Reassignment in const is not possible reason TypeError: Assignment to constant variable.

const accountBalance = 7678678 // yesterday account balance was this
accountBalance=89797 // today's balance
console.log(accountBalance);



/* Conclusion :

1. Using var you can redeclare and reassign a value
2. Using let you cannot redeclare but we can reassign a value. Example: accountBal
3. Using const you cannot redeclare as well as reassign a value. Example : accountNum or aadharNum*/















// Reassignment in const