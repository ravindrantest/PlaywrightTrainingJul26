

class empDetails {


    //a variable eName that is declared inside a class is called as a "property" => hold values
 eName = "Ravi" // here the default accessmodifier is public
//methods

empUpdate(){ // methods are actionable dependant on the class created
 
    console.log("Employee Name Update",this.eName); 

     //  let eNumber = 67676 // eName 
     //console.log("Employee Name Update",eNumber); 
}


}

const obj = new empDetails()


obj.empUpdate()



