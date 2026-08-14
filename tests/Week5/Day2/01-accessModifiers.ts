
export class EmployeeSignUp { // Pascal case for class name 

    public eName: string = "Ravindran"; //Property in a class// By default the acces modifiers are going to be "public"
    private eSalary: number = 898798; // private property cannot be accessed outside of the class block this private property can be accessed using getter and setter method

    protected ePhno: number = 767676767; // protected property is accessible within the class and outiside of the class it is accessible only through a inherited class using "extends"

    public readonly eId: string = "ID4545"

    static eAddress: string = "5th Avenue, Chennai" // While using static keyword we dont need an object like "this" keyword to access the property instead we can directly use the class name to access it

    constructor() {
        console.log(`THis is a constructor of parent class EmployeeSignUp`);
    }

    employeeDetails() {
        //   this.eid="ID76767" // here we cannot change the eid value as we have used "readonly" accessmodifiers

        console.log(`The emp details ${this.eName} : salary ${this.eSalary} : phone number : ${this.ePhno} with address ${EmployeeSignUp.eAddress}`); // public, private, protected are accessible within the class 

    }

    get readData() {

        return this.eSalary // old salary // here the getter returns a property
    }

    //Here set keyword is used to modify the old value of the eSalary

    set writeData(newSal: number) { // here the newSal local variable holds the new salary number which was asigned outisde of the class

        this.eSalary = newSal   // this.eSalary is the old salary that is over ridden by the old salary

    }


}

// const empObj = new EmployeeSignUp();
// console.log(empObj.eName) // print the property by accesing the public accessmodifier property

// console.log(empObj.readData) // what does empObj.readData holds the salary = 898798

// empObj.writeData = 1212121 //new salary

// console.log(empObj.readData); // here the old salary is over ridden by new salary







/* property or a method are 2 things that can be accessed using an object of a class */