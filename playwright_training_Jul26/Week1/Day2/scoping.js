

//Scoping in JS


//var scoping 

// if (true) {   
//     var username = "hello@gmail.com" // here "var" is declared inside the if block
//     console.log("Try to access username within the if block for var declaration",username);
// }

// console.log("Try to access username outside of the if block for var declaration",username); 

// Here the data declared using var varaible tends to leak out of the "if" block this is not good for a ideal programmming language

// let scoping is block scoped 

// if (true) {   
//     let username = "contact@gmail.com" // here "var" is declared inside the if block
//     console.log("Try to access username within the if block for let declaration",username);
// }

// console.log("Try to access username outside of the if block for let declaration",username); // It is not accessible outiside of the if block




//const scoping


// if (true) {
//     const username = "hi@gmail.com" // here "var" is declared inside the if block
//     console.log("Try to access username within the if block for const declaration", username);
// }

// console.log("Try to access username outside of the if block for const declaration", username); // It is not accessible outiside of the if block

/* ***************************************************************************** */


//function block scoping


// //function scoping during var declarion

// function add() {

//     // if (true) {
//     //     var username = "hello@gmail.com" // here "var" is declared inside the if block
//     //     // console.log("Try to access username within the if block for var declaration",username);
//     // }

//     // console.log("Try to access username outside of the if block for var declaration",username); 

//     var fName = 'Ravindran'

//     // console.log("Accessing the variable declared using var within the function block",fName);

// }

// console.log("Accessing the variable declared using var outside of the function block", fName); // var is not accessible outside of the function block


// add()


//function scoping during let declarion

// function add() {

//     // if (true) {
//     //     var username = "hello@gmail.com" // here "var" is declared inside the if block
//     //     // console.log("Try to access username within the if block for var declaration",username);
//     // }

//     // console.log("Try to access username outside of the if block for var declaration",username); 

//     let fName = 'Ravindran'

//     // console.log("Accessing the variable declared using var within the function block",fName);

// }

// console.log("Accessing the variable declared using var outside of the function block", fName); // let is not accessible outside of the function block


// add()

//function scoping during const declarion

function add() {

    // if (true) {
    //     var username = "hello@gmail.com" // here "var" is declared inside the if block
    //     // console.log("Try to access username within the if block for var declaration",username);
    // }

    // console.log("Try to access username outside of the if block for var declaration",username); 

    const fName = 'Ravindran'

    // console.log("Accessing the variable declared using var within the function block",fName);

}

console.log("Accessing the variable declared using var outside of the function block", fName); // const is not accessible outside of the function block


add()

/* 
Conclusion :
-------------
=>var along with let and const is also function scoped


for block scope (if,switch, while..) behaviour:

1. var declaration is not block scoped 
2. Whereas let and const are block scoped here block means if,for,switch... */