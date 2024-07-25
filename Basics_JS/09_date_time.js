const todayDate = new Date()

// console.log(todayDate)// gives time in milli seconds
// console.log(todayDate.toString())// gives string representation of date
// console.log(todayDate.toDateString())//gives dagte as string value
// console.log(todayDate.toISOString())//gives date as string but in ISO form ISO format is:"  year, month, day, hour, minutes, seconds, and milliseconds"
// console.log(todayDate.toJSON())// same as toISOString
// console.log(todayDate.toLocaleDateString())// converts date to string by using current or specified  locale
// console.log(todayDate.toDateString())// retirn date as a string value
// console.log(todayDate.toLocaleTimeString())// converts time to string by using current or specified locale
// console.log(todayDate.toTimeString())// returns time as a string value
// console.log(todayDate.toUTCString())// returns date converted to string using UTC
// console.log(todayDate.getTimezoneOffset())

//const newDate = new Date(2024 , 9 , 18)
//const newDate = new Date("2024,10,18")
//const newDate = new Date("18,10,2024")//will not work
const newDate = new Date(2024 , 9 , 18)
//console.log(newDate.toLocaleDateString())

const currentTime = Date.now()
console.log(currentTime) //  gives in milliseconds which is best for any comparison
console.log(newDate.getTime())// gives time in milliseconds and if invalid date than NaN
console.log(Math.floor(newDate.getTime()/1000))// gives time in seconds and if invalid date than NaN
console.log(Math.floor(newDate.getMinutes()))//finds the minutes
console.log(Math.floor(newDate.getHours()))//finds the hours 
console.log(newDate.getDate())//finds the date 
console.log(newDate.getMonth())//finds the month 

console.log(newDate.getFullYear())//finds the year


