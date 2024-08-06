const userInfo = {
    name : 'noor un nisa',
    age : 19,
    message : function() {
        console.log(`${this.name}, thank yoou for your co-operation.`)
        console.log(this);
    } 
}// "this" refers to the current context/current scope
userInfo.message()
userInfo.name = "mehru"
userInfo.message()
console.log(this)// refers to the current context/global scope if no code is written before it then it gives an empty object BUT in window console it gives something in window console "window is he most global object"

function one(){
    const Class = 'first year'
    console.log(this.Class)
    console.log(this)
}
const Class= function (){
    const Class = 'first year'
    console.log(this.Class)
    console.log(this)
}
const Subj = () => {
    const Class = 'first year'
    console.log(this.Class)
    console.log(this)
}// arrow function
// "this" is not used in any of the function
// () => {}// syntax of arrow function we can alsp hold it in a variable

const addNum = (num1,num2,num3) => {
    return num1+num2+num3
}// explicit return.
const AddNum = (num1,num2,num3) => num1+num2+num3 // implicit return.we don't have to write "return" keyword  nor we have to write parenthesis()
const addnum = (num1,num2,num3) =>( num1+num2+num3)// implicit return.we can apply parenthesis if we want but should not write "return" keyword because it is for explicit return.
console.log(addNum(12,45,2));
console.log(AddNum(23,45,6));
console.log(addnum(12,34,23));


