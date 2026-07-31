

//Palindrome => malayalam => malayalam

//reverse

let x = "playwright"; // index => 0,1,2,3,4,5,6,7,8,9
                            // length => 1,2,3,4,5,6,7,8,9,10

                            //p=0; l=1;...t=9

let reverse = ""

let courseLength = x.length // 10

for(i=courseLength-1;i>=0;i--){  // 10-1 => 9

reverse = reverse+x[i] // "" = "" + x[9]
                        // t = t + x[8]
                        // th = th + x[7]
                        // thg = thg+x[6]
}  


console.log(reverse); //thgirwyalp

if (x===reverse) {
    console.log("It is a palindrome");    
}else{
    console.log("Not a palindrome");
    
}





//Index
x[0] // p
x[1]  // l
x[2]  // a


x[9] // t




