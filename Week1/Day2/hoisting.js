import {   } from "../Day2/scoping";

// var x // x= undefined
// console.log(x);// line number 4 the value of x is yet to be assigned so it is undefined

// var x=10

//JS will scan the whole file and looks if "x" is declared some where within the file

/* Internally below thing happens

var x
console.log(x)
*/


// console.log(y); //ReferenceError: Cannot access 'y' before initialization

// let y=100

/* In let also hoisting happens casuse that is how JS is designed but it will not point towards "undefined" but a reference error zone 
called as "Temporal Dead ZOne" we are doing this so that JS works / behaves like a normal porgramming language to build enterprose level applications */


console.log(z); //ReferenceError: Cannot access 'z' before initialization

const z=100

/* Conclusion :
1. var hoisting happens and throws undefined while trying to retreive the value of a variable redeclared as var
2. let hoisting happens and throws reference error while trying to retreive the value of a variable redeclared as let
3. const hoisting happens and throws reference error while trying to retreive the value of a variable redeclared as const
  */