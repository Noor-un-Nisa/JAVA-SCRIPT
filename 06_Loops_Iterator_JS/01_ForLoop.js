// FOR LOOP
for (let i = 0; i < 5; i++) {
    const element = i;
    console.log(`Number: ${i}`);
}

// FOR LOOP WITH A CONDITION
for (let index = 1; index <=5 ; index++) {
    const element = index;
    if(element==index){
        console.log(`the value of element is same as that of index ${element}`);
    }
}

// FOR LOOP WITHIN A FOR LOOP
for (let a = 1; a <= 5; a++) {

    for (let b = 1; b <= a; b++) {
        console.log(`innner loop value: ${b} outer loop value: ${a}`);
    }
}

// PRINTING TABLEs USING 2 FOR LOOPS
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++){
       console.log(`${i} * ${j} = ${i*j}` );
    }
    console.log(``);
}

// PRINTING ARRAY USING FOR LOOP
const myArray = ['ironman','superman','batman','spiderman']
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    console.log(`${myArray[index]}`);
}

// BREAK STATEMENT IN FOR LOOP
for (let x = 1; x <= 5; x++) {
    if (x==3) {
        console.log(`no more iteration`);
        break
    }
    console.log(`${x}`);
}

// CONTINUE STATEMENT IN FOR LOOP
for (let x = 1; x <= 5; x++) {
    if (x==3) {
        console.log(`iteration is skipped`);
        continue
    }
    console.log(`${x}`);
}