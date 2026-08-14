//Arrays in JavaScript:

//1. The length of the array is dynamic in size.
//2. It can handle heterogenous datatypes.

const numarray = [3,4,5,6,7] // length can vary

const arrayVal = [2,"Hello",true,5] // heterogenous datatypes in a single array

//array methods:

//1. push() =>add an element to the end of the array

let charArray = ["a","b","c","d"];

charArray.push("e","f","g");

console.log(charArray);

/* Output :
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
] */

//2. pop() => remove one element from the end of the array.

charArray.pop()
console.log(charArray); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//3. unshift() => add elements to the front of the array.

charArray.unshift("x","y","z");
console.log(charArray);

/* [
  'x', 'y', 'z',
  'a', 'b', 'c',
  'd', 'e', 'f'
] */

//4. shift() => remove only one element from the front of the array.

charArray.shift();
console.log(charArray);

/* [
  'y', 'z', 'a',
  'b', 'c', 'd',
  'e', 'f'
] */


//5, slice() => to extract a part of the array

let arrayEle = ["a","b","c","d"]; //[-4,-3,-2,-1]

const outputSlice = arrayEle.slice(-3,-1) // [ 'c' ] // 2=>"c" and -1=>"d" which is ignored
console.log(outputSlice); // [ 'b', 'c' ]

//COnclusion while using slice() the original array is not changes compared to other methods

//Important : Always First Index should be lower and end index should be greter than the first index it will givw you empty array.

//6. splice()=>add or remove elements in an array

let arraySplice = ["x","y","z","w","v"]

arraySplice.splice(2,3,"a","b");
console.log(arraySplice); //[ 'x', 'y', 'a', 'b', 'c' ]

//7. concatenation of array :

//Spread Operator // Used in modern JS

let numArray1 = [1,2,3,4,5];
let numArray2 = [6,1,4,5,6];

const spreadArray = [...numArray1,...numArray2] // By adding 3 dots infront of the array we and seperating the 2 arrays with a comma we will get the concatenated output

console.log(spreadArray);


//concat() older version of JS

const concatArray = numArray1.concat(numArray2)
console.log(concatArray);


//8. sort()


// let sentence = "I love playwright very much "; // Here it is string and hence we need to split into an array before sorting

// const sortVal = sentence.split(" ")

let sortVal = ["a","A","d","p","i"] // this is a direct array you dont need to us split()

//ASCII value of "A"=> 41 and "a"=>61

console.log(sortVal.sort()); 

//Here the sort method looks to the ASCII table


//sort for number array :

let numberArray = [10, 8, 9, 7];
numberArray.sort() // 
console.log(numberArray); // [ 10, 7, 8, 9 ]

