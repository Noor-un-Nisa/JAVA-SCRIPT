function myCart(...item){
    return item
}// ... is a rest operator. it is used to add  multiple values/arguments in a single variable and in return gives an array on console
console.log(myCart("jade roller","vaseline lotion","facewash","rivaj makeup"))
// objects in function
const myItems = {
    item1 : "makeup brushes",
    price : 550
}
function objectInFunction(anObject) {
    return `You bought ${anObject.item1}. So your total will be ${anObject.price}.`
}
console.log(objectInFunction(myItems))
console.log(objectInFunction({
    item1:"makeup",
    price: 1500
}))

// array in function 
const myProducts = [200,400,368,245,299]
function arrayInFunction(anArray){
    return anArray[3]
}
console.log(arrayInFunction(myProducts))
console.log(arrayInFunction([200,450,122,346,4589]))



