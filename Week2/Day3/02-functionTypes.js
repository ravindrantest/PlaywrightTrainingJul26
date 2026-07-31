

//Named function


// export function add(x,y){ //Now when I use return keyword the "result" will be stored inside the function name i.e., add(x,y)= result

//     const result = x+y //30
//    // console.log(result);
    
//     return result
// }
// console.log(add(10,20)) // 30

//FUnction Expression or Anonymous Function

let exp = function (x,y){

    const result = x+y
    return result
}

console.log(exp(10,20)) // 30


//Arrow Function

// let arrow = (x,y)=>{ // fat arrow

//     const result = x+y
//     return result
// }

// console.log(arrow(20,30));

//Arrow function in single line 

const arrow2 = (a,b)=>a+b
console.log(arrow2(40,50));


