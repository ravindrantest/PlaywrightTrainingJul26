

//Employee Details when we use primitive datatypes declaration:

// let ename = "Ravindran";

// let empid = 12344

// let empphno = 2341341

//Employee Details when we use non-primitive datatypes declaration which can store a collection of values:

// let empDetails ={ // here empDetails is the object name
//     ename : "Ravindran",
//     empid : 12344,
//     empphno: 2341341
// }

// console.log(empDetails.empid); // using dot notation we can retrieve the data that is within an object


// TypeScript way of handling static typing: Dot notation :

let studentDetails : {
    studentName : string,
    studentId : number,
    studentAttendance : boolean
} ={
studentName : "Ravindran",
studentId : 12323,
studentAttendance:true
}

console.log(studentDetails.studentName);


// Square bracket Notation :

let studentDetailsSquare : {
    "student-Name":string,
    studentId : number,
    studentAttendance : boolean
} ={
"student-Name": "Ravindran",
studentId : 12323,
studentAttendance:true
}

console.log(studentDetailsSquare["student-Name"]);







