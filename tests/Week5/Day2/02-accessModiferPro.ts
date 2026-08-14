
import { EmployeeSignUp } from "./01-accessModifiers.ts"; // connectivity to the parent class

class HR extends EmployeeSignUp{ // Here HR inherits all the property and methods of the parent class

dep:string

constructor(){ // here we cannot have a constructor in the child when you already have a constructor in the parent class
super() // here by using super keyword we can use a constructor with your child class to initilaize a specific child class property
this.dep="QA"
console.log(`This is a child class constructor initialized with value ${this.dep}`);

}


empPhone(){

    console.log(this.ePhno); // accessing the property before modification
    
    this.ePhno=989898989// protected is accessible outside of the class only through inheritance 
    console.log(this.ePhno); // printing the protected property after modifying the protected variable
    
}

}

const objhr = new HR(); // here when we create an object for the child class the 
objhr.employeeDetails();


console.log(objhr.eName) // print the property by accesing the public accessmodifier property

console.log(objhr.readData) // what does empObj.readData holds the salary = 898798

objhr.writeData = 1212121 //new salary 

console.log(objhr.readData)


/* 
About constructor and object creation in "CHILD CLASS" :

When we create an object for the child class, the constructor of the parent class will be invoked first 
and then the child class constructor will be invoked and then all the other property and methods will ne initilaized as per the priority of the call made by the object of the child class */