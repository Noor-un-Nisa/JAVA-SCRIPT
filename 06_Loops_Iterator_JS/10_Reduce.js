// reduce use to add all the values in an array

let ShoppingCart = [
    {
        item : 'amazon course',
        price : 1499
    },
    {
        item : 'shopify course',
        price : 2999
    },
    {
        item : 'js course',
        price : 5999
    },
    {
        item : 'web developement course',
        price : 14999
    }
]

let  total = ShoppingCart.reduce((accumulator,current)=>{
    console.log(`${current.item}  =>  ${current.price}`);
    return accumulator+current.price  
},0)
0 is the accumulator value or the starting value
console.log(total);


// using for loop instead of reduce
let sum = 0
for (let index=0 ; index<ShoppingCart.length;index++){
    console.log(`${ShoppingCart[index].item} => ${ShoppingCart[index].price}`);
       sum += ShoppingCart[index].price
}

console.log(sum);
