

/* Datatypes inTypeScript:

1. number 
2. string
3. boolean
4. undefined
5. null
6. any
7. unknown
8. never
9. tuple
*/



//If I need TypeScript to behave like dynamic typing similar to that of JS we use "any" datatype in TypeScript
//any datatype:

let a : any = 123 // a is a variable which is storing a number value 123
a="Playwright"


//unknown datatype:

let b : unknown  = 123// we use any datatype cause we are not sure about the datatype that comes from an external source example .env / server

    if (typeof b ==="string") {
          console.log(b.toUpperCase())
    }


// tuple:

let c : number = 123 // in primitive datatype

let arrayVal : [string,number,boolean] = ["Playwright",123,true] // non primitive datatypes
  









