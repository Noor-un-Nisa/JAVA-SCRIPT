// maps mai sb kuch return ho ga
const number = [1,2,3,4,5,6,7,8,9,10]

let Num = number.map( (num)=>{ return num+1})
// console.log(Num);

// Chaining => using multiple methods at once

let newNumbers = number
             .map((num)=>{return num*10})
             .map((num)=>{return num+11})
             .filter((num)=>{return num%3!=1})
             .map((num)=>{return num+1})

//console.log(newNumbers);

// let newNumber = number.map((num)=>{return num*10})
// let Number=newNumber.map((num)=>{return num+11})
// let FILTER = Number.filter((num)=>{return num%3!=1})
// let MAP = FILTER.map((num)=>{return num+1})
// console.log(newNumber);
// console.log(Number);
// console.log(FILTER);
// console.log(MAP);// it is same as line 8_14

let MAPP = number.map((nu)=>{return nu>=4})
console.log(MAPP);

