// their are "2" types of memory:
//1. STACK MEMORY: all the "primitive datatypes" are "stored in stack memory".
let drink1 = "sprite"
let drink2 = drink1
drink2 = "pepsi"

console.log(drink1)
console.log(drink2)

// 2. HEAP MEMORY:all the "non primitive datatypes" are "stored in heap memory".
let data1 = {
    name:"noor",
    age:19,
    semester:"2 completed",
}
let data2 =  data1
data2.semester = "3 started"

console.log(data1)
console.log(data2)