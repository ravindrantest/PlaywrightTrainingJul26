

//Compound Assignment Operator


let x=10;
x+=5; // x=x+5

console.log(x);

let y=10;
y-=5; // x=x+5

console.log(y);

let z=10;
z*=5; // x=x+5

console.log(z);


//Post increment

let a=10;
console.log(a++); // 10
console.log(a);//11

// Prec increamnt

let b=10;
console.log(++b); // 11
console.log(b);//11


//Post decrement

let c=10;
console.log(c--); // 10
console.log(c);//9

// Pre decrement

let d=10;
console.log(--d); // 9
console.log(d);// 9

/* ********************** */


/* Strict Equality:
===
=> compare the datatype and
=> compare the value
*/


/* Non strict equality // Loose Equality
=> Just the value alone */


console.log(1==="1"); //false // In strict there is not coercion
console.log(5=="5"); // true
/*Type Coercion => It is an inbuilt mechanism ins JS that will convert the dtring datatype to number */
 
console.log(1===true);//false
console.log(1==true); // true because if tyoe coercion

console.log(null==undefined); // true // type coercion because of ECMA script 
console.log(null===undefined); // false

