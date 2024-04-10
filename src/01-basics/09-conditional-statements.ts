// Generate a random number bt -5 and 5 both inclusive
let r1: number = Math.floor(Math.random() * (5 - (-5) + 1) + (-5));

console.log(`The random number is ${r1}.`);

// Check if the random number is EVEN or ODD
if(r1 % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}


// Check if the random number is POS, NEG or NEUTRAL-ZERO
if(r1 > 0) {
    console.log('POS');
}
else if(r1 < 0) {
    console.log('NEG');
}
else {
    console.log('NEUTRAL-ZERO');
}


// Ternary Operator -- in JS/TS can have multiple conditions
// snytax: varible = condition ? true statement : false statement
let result1: string = r1 % 2 === 0 ? 'EVEN' : 'ODD';
let result2: string = r1 > 0 ? 'POS' : r1 < 0 ? 'NEG' : 'NEUTRAL-ZERO';

console.log(result1);
console.log(result2);

let dayN: number = 3;

switch(dayN) {
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;
    case 5: 
        console.log('Friday');
        break;
    case 6: 
        console.log('Saturday');
        break;
    case 7: 
        console.log('Sunday');
        break;
    default: 
        console.log('Number does not represent any day!!!');
}


// If the day is 1,2,3,4,5 -> WEEKDAY
// if the day 6, 7 -> WEEKEND
// Number does not represent any day!!!
switch(dayN) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: 
        console.log('WEEKDAY');
        break;
    case 6: 
    case 7: 
        console.log('WEEKEND');
        break;
    default: 
        console.log('Number does not represent any day!!!');
}

// JS/TS can sit switch condition can be a boolean 
switch(true) {
    case dayN >= 1 && dayN <= 5:
        console.log('WEEKDAY!');
        break
    case dayN === 6 || dayN === 7:
        console.log('WEEKEND');
        break;
    default: 
        console.log('Number does not represent any day');
}

