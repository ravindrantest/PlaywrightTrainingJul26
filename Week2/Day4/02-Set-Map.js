

//Set : will have only unique values inside an array

let num = [2,5,6,7,2,5,6]


//let uniqValues = new Set(num) // Object : Set(4) { 2, 5, 6, 7 }

let uniqValues = [...new Set(num)] // Array : [ 2, 5, 6, 7 ]
console.log(uniqValues);

//Map : Is also an object that stores data in key-value pair


let empDetails = new Map(); // Creating a memory locator to hold the vale that we are going to create in key-value format.

empDetails.set("Ravi",3545) // here set(key,value)
empDetails.set("Ram",6575)
empDetails.set("Hari",6876)


//Here set used to create and update a value inside an object
console.log(empDetails);
empDetails.set("Ravi",8787)

console.log(empDetails);

//Here delete used to delete the data

empDetails.delete("Ravi");
console.log(empDetails);

//Here size of a Map
console.log(empDetails.size);


// get to get a particular value of a key
console.log(empDetails.get("Ram")); // 6575

// has will return true / false depending on the key present in the Map 

console.log(empDetails.has("Ravi"));



// for of  for Map key-value pair:

for(let [empName,empNo] of empDetails ){

    console.log(empName,empNo);
    
}


//Array of element

let arrayStr = ["playwright","selenium","cyprus"]

for(let tempVal of arrayStr){

    //temVal = "playwright for 1st iteration"
    //temVal = "selenium for 2nd iteration"

    console.log(tempVal)
}

//forEach we will use arrow function to return a value :
// We dont forEach() use much in automation

//Internally :
/* ["playwright","selenium","cyprus"].forEach(elelment =>{
    
    element = "playwright"
    
    }) */

arrayStr.forEach(element => {
    console.log(element);
    
});