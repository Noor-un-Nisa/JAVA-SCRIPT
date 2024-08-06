// IIFE => Immediately Invoked Function Expressions
// when a function is immediately executed after it is written down and to remove the pollution of global scope IIFE is used.We need to apply terminator ";" because IIFE does not know where to end the function
(function one(){
    // named IIFE
    console.log(`CONNECTED TO INTERNET`);
})();
// ()=> here function is wrapped()=>here function executes and arguments are passes if needed
(()=>{
    console.log(`ALL INPUT OUTPUT DEVICES ARE CONNECTED`);
})();