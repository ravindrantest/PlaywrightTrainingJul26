// Global variable
const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion === "Chrome") {

        // Function-scoped variable
        var browserVersion = "Chrome Version 138";

        console.log("Inside if block:", browserVersion);
    }

    // Accessible because var is function-scoped
    console.log("Outside if block:", browserVersion);
}

getBrowserVersion();