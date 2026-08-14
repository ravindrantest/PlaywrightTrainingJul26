

let numberArray = [10, 8, 9, 7];

numberArray.sort((a,b)=>a-b) // ascending
console.log(numberArray);


numberArray.sort((a,b)=>b-a) // descending
console.log(numberArray);

/* 
Sort by ascending order we use (a,b)=>a-b
Sort by ascending order we use (a,b)=>b-a

if the sort method receives a positive value / result from the arrow function it will swap/move lower value to the front and higher to the back */

//a=10 , b=8





