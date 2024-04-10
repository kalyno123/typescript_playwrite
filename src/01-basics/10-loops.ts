// for loop - traditional i loop
for(let i = 0; i <= 5; i++) {
    console.log(i);
}

let fname2: string = 'John';

for(let i = 0; i < fname2.length; i++) {
    console.log(fname2[i]); // using [index] to get char at a speafic index from a string
}
// NOTE: when there is index of out bound error JS/TS whille not throe such expections instead it will run as undefined 

let reversed: string = '';

for(let i = fname2.length-1; i >= 0; i--) {
    reversed += fname2[i];
}

console.log(reversed);


// while loop -- when condition is true the block of code will run until condition becomes false 
let countHello: number = 0;
while(countHello < 5) {
    console.log('HELLO World');
    countHello++;
}

//do-while loop -- do block will run atleast once then check if the condition is true while its true itll keep looping until while condition becomes false
countHello = 0;
do{
    console.log('HELLO World');
    countHello++;
} while(countHello < 5);


// Difference between while vs do-while -> do-while will always run at least once
while(false) {
    console.log('This is WHILE-LOOP'); // will not execute
}

do {
    console.log('This is DO-WHILE-LOOP'); // will execute once
} while(false);


// NESTED LOOP
for(let i = 1; i <= 3; i++) {
    console.log('i is =', i);

    for(let j = 1; j <= 5; j++) {
        console.log('\tj is =', j);
    }
}

// for...of loop - this is same as for-each loop in java
const names: string[] = [ 'Daria', 'Jafeth', 'Adam' ];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for(const name of names) {
    console.log(name);
}


// loop control statements -> break and continue
// Do not print any number that is 7, 13 or their multiples
// break the loop if you get any number divisible by 3, 5 at the same time
for(let i = 1; i <= 50; i++) {
    if(i % 7 === 0 || i % 13 === 0) continue;
    if(i % 15 === 0) break;
    console.log(i);
}