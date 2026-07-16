//typeof operatior

// It is a unary operator used to retreive the datatype of a value stored in a variable.


//Declaration 
var empNo  // opening a memory location to store a value

//Assignment // assigning a value to a variable 

empNo = 98798789

//Intilization 

var empNo = 98798789 // doing both declaration and assignment together is called initilization

/* ******************************DATATYPES********************************** */

//numbers:
//int x =123

var empNo = 98798789 
console.log(empNo); 
console.log(typeof empNo); // number


//bigint // as QA we dont use bigint 

var accountNumber = 788708700890980987697n 
console.log(typeof accountNumber);  //bigint



/* -2^53-1 to 2^53-1  */

//boolean

var empPresent = true
console.log(empPresent); // value // true
console.log(typeof empPresent); // what datatype it stores // boolean


//string


var empName = "Ravi"
console.log(empName); // Ravi

console.log(typeof empName); // string


//undefined

var accountNumber2  // the value is assigned during the runtime
console.log(accountNumber2); // undefined
console.log(typeof accountNumber2); // here the datatype is interpreted by JS as undefined


//null

var webeleFrames =null
console.log(webeleFrames); // null
console.log(typeof webeleFrames); //object // 

/* null (empty) --> object // HISTORICAL BUG CREATED during the development stage of JavaScript

object 
(name:"ravi")  --> object


*/
