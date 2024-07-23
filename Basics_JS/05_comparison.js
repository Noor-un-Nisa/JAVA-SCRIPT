// ** IN JAVA SCRIPT EQUALITY AND COMPARISON OPERATORS WORK DIFFERENTLY
// Comparison of same data type
console.log(2>4)
console.log(2>=4)
console.log(2<4)
console.log(2<=4)
console.log(2==4)
console.log(2!=4)
console.log(true>false)
console.log("2">"5")

// Comparison of differenet datatypes

console.log(true>5)
console.log(5>="3")
console.log(false=="0")

// **FOLLOWING COMPARISONS ARE AVOIDED
// Comparison of null datatype
console.log(null>0)// false
console.log(null>=0)// true
console.log(null<0) // false
console.log(null<=0)// true
console.log(null==0)//false
console.log(null!=0)// true
// in comparison null is converted to a number "0"

// Comparison of undefined

console.log(undefined>0)// false
console.log(undefined>=0)// false
console.log(undefined<0)// false
console.log(undefined<=0)// false
console.log(undefined==0)// false
console.log(undefined!=0)// true

//** === strict check. checks the datatype of  variable. no conversion of datatype in it
// == conversion occurs
console.log("2" === 2)// false
console.log("2" == 2)// true
