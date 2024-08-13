// Array specific loops
// For Of Loop
// for (let index = 0; index < array.length; index++) { }
// value is same as value in for of loop
let totalAwards = [13,34,56,3,2,10]
for (const value of totalAwards) {
  console.log(`total awards are: ${value}`);
}

let greetings = ['Hello','Hi','Salam u alikum','Namasty','Adaaab','Good morning']

for (const greet of greetings) {
    if (greet==' ') {
        console.log(`empty spaces have been ignored`)
        continue
    }
    console.log(`Greetings: ${greet}`)
}

let name = 'noor un nisa'

for (const Name of name) {
    if (Name==' ') {
        console.log(`empty space detedted`);
        continue
    }
    console.log(`name characters: ${Name}`);
}

// for of loop and maps
// maps: unique value and key cannot be repeated. always come in an order.

let map = new Map()
map.set ('Country','Country Code')
map.set ('Pakistan','Pak')
map.set ('South Africa','SA')
map.set ('United States of America','USA')
map.set ('United Arab Emirates','UAE')
map.set ('India','IN')

console.log(`Country and their Country Codes: `);
console.log(map);

for (const countries of map) {
    console.log(countries);
}

for (const [country,code] of map) {
    console.log(`${country} => ${code}`);
}

// For of Loop and Objects

let myObj = {
    course1 : 'HTML',
    course2 : 'JS' 
}

for (const courses of myObj) {
    console.log(courses);
}// for of loop does not work on objects