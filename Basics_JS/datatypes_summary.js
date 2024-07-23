// in java script it is not necessary to  define the type of variable while declaring and initializing it.So it is "dynamically typed language".
//if we  have to define the type of variable in any language then it is static type
//in official documentation there are "2" types of datatypes.
// 1. PRIMITIVE DATATYPE   2. NON-PRIMITIVE/REFERENCE TYPE DATATYPE
// Difference between these two  datatypes is that: "HOW THEY ARRE STORED IN MEMORY AND HOW WE ACCESS THEM FROM THE MEMORY/DATA"
// PRIMITIVE DATATYPES:They are call  by value.Their reference is not given they are copied and then pass on.Any changes made is only on that  copy not on the original one.Following datatypes are included in primitive datatypes:                 
//1.Strings      2.Number    3.Null           4.Undefined    5.Symbol      6.BigInt         7.Boolean
let marks=100 // number
let height=5.5 // number
console.log(typeof marks)//number
console.log(typeof height)//number

let Name="noor"//string
console.log(typeof Name)//string

let temp=null // null means it is empty
console.log(typeof temp)//object

let course=undefined // undefined
let courses; // undefined
console.log(typeof courses)//undefined
console.log(typeof course)//undefined

let loggedIn=true // boolean
let id=Symbol('12345')// symbol

let anotherId=Symbol('12345')// symbol
// the return value of Symbol is always different even if the value passed is same.
console.log(id === anotherId)// false
console.log(typeof id)//symbol
console.log(typeof anotherId)//symbol


// NON-PRIMITIVE(REFERENCE TYPE):Ther are call by refernce.Their referece or  address is given to us.Following are the datatypes included in non-primitive datatypes:
//1.Arrays      2.Objects       3.Functions

let names = ["ayesha" , "hadia" , "usama"]// arrays
let myIntro = {
    myName:"noor",
    myAge:19
} // any data inside curly braces{} is an object
// in js functions can be treated as variables
let myFunction = function(){
    console.log("hi noor!")
}
console.log(myIntro)
console.log(names)
console.log(myFunction)

// return type of non-primitive is object only
console.log(typeof myFunction)// function object
console.log(typeof names)// object
console.log(typeof myIntro)//object
