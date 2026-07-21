
//switch statement:

function browserName(){

    // if (true) {
    
        // if (browser==="chrome") {
        
    // }
    // }

switch(browser){

    case "chrome":
        console.log("The browser is chrome");
        break;

    case "msedge":
        console.log("The browser is edge");
        break;

    default:
        console.log("It is not a valid browser");
        break;

}

}

let browser="msedge"
browserName()