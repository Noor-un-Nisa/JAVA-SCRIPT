// array is an object 
// it stores multiple elements in a single variable.
//JS arrays are resizable and can store elements of different datatypes.
// () => parenthesis  {} => braces / curly braces    [] => brackets  
// arrays make "shallow copies"  =>"A shallow copy of an object is a copy whose properties share the same reference" 
// array indexing starts from 0
const Arr_1 = [1,2,3]
console.log(Arr_1)
// METHODS IN ARRAY

Arr_1.push(7)// add an element in an array
console.log(Arr_1)
Arr_1.pop()//remove the last elemenet of the array 2. there is no argument
console.log(Arr_1)

Arr_1.unshift(4)// add an element at the stating of the array
console.log(Arr_1)
Arr_1.shift()// remove an element from the stating of the array 2. no argumen is given
console.log(Arr_1)

console.log(Arr_1.includes(3))// checks if a certain element is included or not gives answer in boolean

console.log(Arr_1.indexOf(14))// tells the index of certain element   2. if a certain element is not there then gives "-1" as output

const Arr_2 = Arr_1.join()// .join adds the all element of an array into string
console.log(Arr_2)

console.log("A" , Arr_1)
const Arr_3 = Arr_1.slice(1,2)// 1. remove the elements 2. ranging element is not included 3. no change in original array
console.log(Arr_3)
console.log("B" , Arr_1)
const Arr_4 = Arr_1.splice(1,2)// 1.remove the elements including the ranging element 2. change in original array
console.log(Arr_4)
console.log("C" , Arr_1)
