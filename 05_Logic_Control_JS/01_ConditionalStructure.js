// simple if_else statement
let userName = true
let password = true

if(userName && password){
    console.log(`welcome back`)
}
else{
    console.log(`No user logged in.Please sign up first`)
}

// // nested if statements
let totalAmount = 15050

if(totalAmount>5000){
     if(totalAmount>=10000){
         if(totalAmount>15000){
    let Discount = totalAmount-((15/100)*totalAmount)
    console.log(`your new amount after discount is: ${Discount}`)}}
}
else{
    console.log(`Your total amount will be: ${totalAmount}`);
}

// else if statements

let Marks = 20

if(Marks==40) console.log(`Grade A`);
else if(Marks>=30 && Marks<40) console.log(`Grade B`);
else if(Marks>=20 && Marks<30) console.log(`Grade C`);
else if(Marks>=10 && Marks<10) console.log(`Grade D`);
else console.log(`Grade F`);
