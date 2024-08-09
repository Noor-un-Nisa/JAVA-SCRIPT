// there are some truthy falsy values are those which are considered true or false .
// Falsy Values are:
// 1. false         2. 0         3. -0         4. BigInt==0n       5. ""        6. null       7. undefined        8. Nan==not a number        
// All other values are Truthy Values.Some of them are given below:
// 1. '0'           2. 'false'                 3. {}               4. []               5. ' '   6. function(){}  

// let users = 'noor'
let users = []

if (users) {
    console.log(`user is present`);
}
else{
    console.log(`user is not present`);
}
// to check if the array is a true value or not
if(users.length==0){
    console.log(`Array  is present`);
}

let object = {}
if(object){
    console.log(`user is present`);
}
else{
    console.log(`user is not present`);
}
// to check if object is presenet  or not 
if(Object.entries(object).length==0){
    console.log(`object is present`);
}
else{
    console.log(`object is not present`)
}
//NULLISH COALESCING OPERATOR(??): it works on only null and undefined
let value1;
// value1 = 5 ?? 10
// value1 = null ?? 45
// value1 = undefined ?? 20
value1 = null ?? 23 ?? 46
console.log(value1)

// Terniary Operator
let prices = 109
prices<=200 ? console.log(`true`):console.log(`false`)
 
