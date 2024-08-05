function myName(){
    console.log("Noor")
    console.log("Un")
    console.log("Nisa")
}
myName//referrence of a function
myName()//executing a function

function summition(number1 , number2) {
    console.log(number1+number2)
}// no value will be returned
const result = summition(2,5)
console.log(`sum is: ${result}`)// result is undefined because no value is returned
summition(4,6)
console.log(summition(2,5))

function addition(number1 , number2) {
    // let sum = number1+number2
    // return sum
    console.log("following is the sum of numbers. ")
    
    return number1+number2
}// value will be returned
const returnedValue = addition(1,5)
console.log(`sum of number is ${returnedValue}`)
addition(2,5)// will not work because value is returning and there is no console part.if there is any connsole part then that will print on thhe console.
function loggedIn(username){
    if(username===undefined || username===""){
       return `Please enter username.`
    }
    else
    return `${username} is logged in`
}
const userLoggedIn = loggedIn("noor")
const UserLoggedIn = loggedIn("") 
const useLoggedIn = loggedIn()
console.log(userLoggedIn)
console.log(UserLoggedIn)
console.log(useLoggedIn)

