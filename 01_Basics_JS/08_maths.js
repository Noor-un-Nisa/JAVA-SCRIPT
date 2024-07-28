// maths library comes in java script by default 
// maths is an object means  a non primitive library
console.log(Math.abs(-6))//gives absolute value means only +ve value
console.log(Math.round(5.7))// round the values and gives only whole numbers
console.log(Math.ceil(4.3))//round the value to the next one even if it is just 0.1 more
console.log(Math.floor(4.9))//round the value to the same integer 
console.log(Math.min(1,2,3,4,5,6))//finds the minimum value in the array
console.log(Math.max(1,2,3,4,5,6))//finds the maximum value in the array
console.log(Math.random())//value is always between 0 and 1
console.log((Math.floor(Math.random()*6)) + 1)// 1.added one to avoid getting 0 and 2.multiplied by 10 to get maximum number 10 and 3.included math.floor to get an integer value
const minValue = 1
const maxValue = 6
// math.floor(math.random * (maxValue - minValue + 1) + minValue) formula to get random values between two numbers
console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue)
