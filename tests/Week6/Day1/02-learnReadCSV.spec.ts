

//Whats is CSV ?

//Comma Seperated Value

//We will not be able to read the csv data directly so we need to convert csv to json

import {parse} from "csv-parse/sync"
import fs from "fs"

/* Here we are importing fs so that we will be able read the csv
And after reading we will be parsing it (i.e., JSON structure) */

//To get the csv data in array of array

// let records = parse(fs.readFileSync("data/login.csv"))

// console.log(records);

/* Output : Converted to array of array

[
  [ 'TestCaseNo', 'Username', 'Password' ],
  [ 'TC001', 'ravindran.ramdas@testleaf.com', 'Ravi@testleaf#123' ],
  [ 'TC002', 'ravindran.ramdas@testleaf.com', 'Ravi@testleaf#123' ]
]
  
*/


//To get the csv data in json

let records:any[] = parse(fs.readFileSync("data/login.csv"),{columns:true,skip_empty_lines:true})

console.log(records[0].Username);

/* Output : Converted to json

[
  {
    TestCaseNo: 'TC001',
    Username: 'ravindran.ramdas@testleaf.com',
    Password: 'Ravi@testleaf#123'
  },
  {
    TestCaseNo: 'TC002',
    Username: 'ravindran.ramdas@testleaf.com',
    Password: 'Ravi@testleaf#123'
  }
]


  
*/

