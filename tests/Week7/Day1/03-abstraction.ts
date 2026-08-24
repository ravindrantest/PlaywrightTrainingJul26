//Abstract Class

export abstract class Restaurant{ // In abstract class we will be having all the common impmenetations

acceptOrder(){

    console.log("Accept Order");
    
}

acceptPayment(){

    console.log("Accpet Payment");
    
}

delivery(){

    console.log("Delivery");
    
}

abstract prepareFood():void


}

/* An Abstract class has both implemented and unimplemented, it is not 100% abstract  */