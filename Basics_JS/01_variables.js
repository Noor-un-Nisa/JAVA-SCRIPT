const name="noor-un-nisa"
console.log(name)
var cla="14" // should not use var becaue of block scope and functional scope
 /*BLOCK SCOPE: Variables  declared inside a {x=15} block connot be accessed outside from the block.
FUNCTIOAL SCOPE: Variables delared inside a myfunction( let x=13) function cannot be accessed outside form the function*/
console.log(cla)
let age=19
console.log(age);
roll=123456 // not best practice
console.log(roll)
console.table([name,cla,age,roll])
