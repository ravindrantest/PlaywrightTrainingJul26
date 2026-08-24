

interface SwiggyRules{

menu():void // here in interface we will have only the method signature 
acceptOrder() : void
prepareOrder():void

}

interface ZomatoRules{

    trackOrder():void
    acceptPayment():void
}
/* 100% abstraction // unimplemented methods */