

class A2B implements SwiggyRules, ZomatoRules {

    trackOrder(): void {
        console.log("Track Order");

    }

    acceptPayment(): void {
        console.log("Accept Payment");
    }

    menu(): void {
        console.log("Display Menu");

    }
    acceptOrder(): void {
        console.log("Accept Order");

    }
    prepareOrder(): void {
        console.log("Food Preparation");


    }


}

const a2bObj = new A2B()
a2bObj.menu()
a2bObj.acceptOrder()
a2bObj.prepareOrder()
a2bObj.trackOrder()
a2bObj.acceptPayment()