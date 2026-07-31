


//String declaration => "",'',``

let x = "Ravi"

let fName =     "Ravi" // address 1000
let FirstName = "Ravi" // address 1000

let fName1 =    new String("Ravi") // address 1001
let FirstName1 = new String("Ravi") // address 1002


console.log(fName===FirstName); // true
console.log(fName1===FirstName1); // false

//In strict equality the address of the value is also checked 

//Escape Sequence : \ , \\ ,\n,\t


let esc = 'It\'s a\n JavaScript'
console.log(esc);

let dblesc = "I am \"double \tQuote\""
console.log(dblesc);



//Concatenation : => "+", concat() and `$`

//+
let course = "Playwright Training "
let dayNo = 4


let print = "This is a "+course+" we are in day no."+dayNo
console.log(print);

//concat()

let printCOncat = course.concat(dayNo)
console.log(printCOncat);


//template literal => `${}` // Modern JavaScript

let printTemp = `This ia a ${course} we are in day no.${dayNo}`
console.log(printTemp);


//length - property of a string

let courseName = "Playwright"
console.log(courseName.length);

//index starts from "0" and length starts from "1"

//charAt() => we had a index and found the character in that specific index

console.log("Ths character at index 2 is",courseName.charAt(2));

//indexOf() => we will have the character and we will find the index for that character.

console.log("The index of character 'a' is",courseName.indexOf("a"));

//slice()

let courseName2 = "Playwright"

//#12348

const sliceOutput1 = courseName2.slice(1,3) //
console.log(sliceOutput1);

const sliceOutput2 = courseName2.slice(1,-3)//
console.log(sliceOutput2);

const fileName = "Ravindran.pdf"
console.log(fileName.slice(4,8));


//Solution to retreive the extension of a file even when the name of the user changes dynamically \

console.log(fileName.slice(-4));


//substring() // used in older JS

const subString = courseName2.substring(1,-3) // (-3,1)
console.log(subString);

//In substring "-" index is ignored



let sentence = "I love playwright very much ";

const sortVal = sentence.split(" ")

console.log(sortVal.sort());


//console.log(sentence.split(" ")); // here " " is the delimiter
// ["I", "love", "Playwright"]

//Here the delimiter helps tp seperate a string into different string array
















