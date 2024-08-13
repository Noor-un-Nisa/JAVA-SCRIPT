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