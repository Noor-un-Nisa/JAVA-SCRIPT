// JAVA Script execution context:
// it tells how javascript runs or executes.
// 1. Global Execution Phase
// 2. Functional Execution Phasa
// 3. Eval Execution Phase.: it is a property of Global execution phase so, it is not necessary to consider it as a complete separate execution phasae.

// 1. GLOBAL EXECUTION PHASE: it consists of 2 phases.
// i- Memory creation phase
// ii- Execution phase

// i- MEMORY CREATION PHASE: an address or space is allocated to the variables which are declared. no operation works in it 
// ii- EXECUTION PHASE: all thhe operation works in this phase.

// EXAMPLE/SAMPLE CODE => EXPLAINING ITS EXECUTION:

// let value1 = 10
// let value2 = 5
// function addNum(num1 , num2){
//     let result = num1 + num2
//     return result
// }
// let result1 = addNum(value1 , value2)
// let result2 = addNum(10 , 2)

// FIRST CYCLE
// a) First we will have GLobal execution phase.
// b) The code will first run/ executes in global execution phase and it is first allocates in this function.
// c) Second in memory creation phase all the variables will be stored but values will not be assigned they will be undefined. From the above example following will happen in memory creation phase:all the variables will be stored
// " value1 = undefined
// value2 = undefined
// addNum = definition (includes everything from line 18 to line 20
// result1 = undefined
// result2 = undefined"
// Here the first cycle completes which will always happen/occur

// SECOND cycle starts here all the processing works: From thee above example.
// A) all the variables are assigned a value at this point 
// "value1 = 10
//  value2 = 5"
// addNum => next we come diectly on line 22 where a function is called so, whenever a function is called a new variable environment and execution thread is formed and after it is done or completed it deletes.
// so what happens in line 22 is that
// memory execution phase:  
// value1 = undefined
// value2 = undefined
// result = undefined
// execution phase:
// num1 = 10
// num2 = 5
// result = 15 
// next the result is also returning and it return is the global execution phase.
// "result1 = 15"
// addNum => again when we come on line 23 where a function is called so, again a new variable environment and execution thread is formed and after it completes it deletes 
// memory execution phase:  
// value1 = undefined
// value2 = undefined
// result = undefined
// execution phase:
// num1 = 10
// num2 = 2
// result = 12
// next the result is also returning and it return is the global execution phase.
// "result2 = 12"