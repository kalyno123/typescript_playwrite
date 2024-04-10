// number
let age1 = 25; // Type Inference
// age1 = true; // Error

let age2: number = 26; // Explicitly stating type
// age2 = undefined; // ERROR

// string
let fname: string = 'John';
console.log(typeof fname); // string

// boolean
let b1: boolean = true; // true


// TypeScript any type but not recommended in TypeScript
let myVar: any;
myVar = 'Hello';
myVar = 25;
myVar = [1, 2, 3];


// Union type
let myVar2: number | string | boolean; // you can give multiple 2 or more

myVar2 = 'Hello';
myVar2 = 10.5;
myVar2 = 'World';
myVar2 = true; 

// myVar2 = null; // ERROR as the data types allowed are string and number only

let myVar3: boolean | string = myVar2;
myVar3 = '';


// Literal Types
let status1: 'PENDING' | 'ACTIVE' | 'COMPLETED';

status1 = 'PENDING';


// let vs const 
let today: string = 'Monday';
today = 'Tuesday';
today = 'Wednesday';

const pi: number = 3.14;
// pi = 5; // TypeError: Assignment to constant variable.