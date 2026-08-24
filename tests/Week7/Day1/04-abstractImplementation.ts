import { Restaurant } from "./03-abstraction";


class A2Z extends Restaurant { // Concrete class

prepareFood(): void {
    console.log("Prepare veg food");
    
}


}

class KFC extends Restaurant{ // Concrete class

prepareFood(): void {
    console.log("Prepare fried chicken");
    
}




}

class PizzaHut extends Restaurant{ // Concrete class

prepareFood(): void {
    console.log("Prepare pizza");
    
}


}

const a2zobj = new A2Z()
a2zobj.acceptOrder()
a2zobj.prepareFood()
a2zobj.acceptPayment()
a2zobj.delivery()



const kfcobj = new KFC()
kfcobj.acceptOrder()
kfcobj.prepareFood()
kfcobj.acceptPayment()
kfcobj.delivery()



const pizzaobj = new PizzaHut()
pizzaobj.acceptOrder()
pizzaobj.prepareFood()
pizzaobj.acceptPayment()
pizzaobj.delivery()




/* Concrete class:

1. Can never have an unimplemented method
All the methods inside concrete class will be implemented*/

/* Abstract class :

It can have both implemented as well as unimplemented method
Partial Implementation 
Unimpmented method is written using a keyword called abstract)

We connect concrete class with abstract class with "extends" keyword*/


/* Interface 

It is 100% abstraction
We will only have method signature (unimplemented methods)

We connect concrete class with interface with "implements" keyword*/