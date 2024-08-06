let value = 50
const marks = 70
var position = 19
// var is not used because it does not consider block scope means that if a variable is declared inside a scope than we can even access that variable outside that scope which is not good practice.
if(true){
    let value = 10
const marks = 20
var position = 9
console.log(value);//10
console.log(marks);//20
console.log(position);//9
}
console.log(value);//50
console.log(marks);//70
console.log(position)// here the value of position is not 9.
// scope in window console is different than in node scope