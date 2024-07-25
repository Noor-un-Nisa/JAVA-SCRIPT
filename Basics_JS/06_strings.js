const name = "noor un nisa"
const age = 19
const repository = 'JavaScript'
//console.log(name , age , repository)
// not recommended because it is outdated
// string interpolation=>uses backticks "`"
console.log(`my name is ${name} and i am ${age} years old.I made my first repository ${repository} on github.`)

const gameName = new String("Shadow Fight")
console.log(gameName);
console.log(gameName.__proto__);// proto find  its prototype
// FOLLOWING ARE 35  PROTOTYPE METHODS OF STRING
 console.log(gameName.length)//find length of  string

console.log(gameName.at(5))// finds the character at specific index. Allows both -ve and +ve integers. Negative integers starts backward.

console.log(gameName.charAt(5))// finds the character at a specific index
console.log(gameName.charCodeAt(2))//finds the ascii code of a specific character
//console.log(gameName.codePointAt(2))//don't know about this one
console.log(gameName.concat(url))//combine different strings to form a single new string

console.log(gameName.endsWith("fight"))// finds whether the string ends with certain word or not.

console.log(gameName.includes("SHADOW"))// to check whether word or number is included or  not
console.log(gameName.indexOf('h'))//finds inex of a specific character
//console.log(gameName.isWellFormed(2))//don't know about this one

console.log(gameName.replace('Shadow','SHADOW'));//replaces a word with another especially use din url's
 const url =  'https://noor%20'
// console.log(url.replace("%20","_"))
console.log(gameName.repeat(2))//to repeat the string at a time
console.log(gameName.replaceAll('h','n'))//same as replace

console.log(gameName.substring(0 , 7))// divides the string
console.log(gameName.slice(-1 , 11))//1. starts from back 2. negative values can also be included
console.log(gameName.split(" "))// gives array by splitting on basis of white spaces or  others
console.log(gameName.toString())// return the string value

console.log(gameName.trim())// to cut the extra white spaces
console.log(gameName.toLowerCase())//converts in lower case.
console.log(gameName.toUpperCase())//converts in upper case
console.log(gameName.toLocaleLowerCase())//converts to lower case
console.log(gameName.toLocaleUpperCase())// converts to upper case
console.log(gameName.trimEnd())// cut the extra spaces from end or right
console.log(gameName.trimStart())// cut extra spaces from start or left
console.log(gameName.trimLeft())// cut extra spaces from start or left
console.log(gameName.trimRight())// cut the extra spaces from end or right

console.log(gameName.valueOf())//return the string value

//26 done
//console.log(gameName.charCodeAt(2))//

