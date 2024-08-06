// Scope of nested function
function one(){
    const name = "noor"
    function two() {
        const course = "java script"
        console.log(`name: ${name}`)
        
        //console.log(`course: ${course}`)//it can not be accessed

    }
    two() // if it is not called then it will never be acccessed
}
one()// if it not called then nothing will be accesssed 
// Scope of nested if
if(true){
    const firstName = "shabnam"
    console.log("")
    
    if(true){
        const lastName = " waqas"
        console.log(`mother name: ${firstName} ${lastName}`)
    }
}
// declaring funtions also called hoisting
console.log(addone(1))

function addone(num) {
    return num+2
}// simply declaring a function.  we can access this function even before declaring it
const subtractone = function (num) {
    return num-2
}// declaring a function but storing it in a variable. we cannot access this function before it
console.log(subtractone(1))
