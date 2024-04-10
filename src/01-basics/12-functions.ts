// 1. Regular function declaration 
sayHi1('John'); // 'Hello John!' // This will work with no errors 

function sayHi1(name: string): void {
     console.log(`Hello ${name}!`);
} 

sayHi1('John'); // 'Hello John!'

// sayHi2('John'); // 'Hello John!' Block-scoped variable 'sayHi3' used before its declaration.

// 2. Function Expression
const sayHi2 = function(name: string): void {
    console.log(`Hello ${name}!`);
} 

sayHi2('John'); // 'Hello John!'


// sayHi3('John'); // 'Hello John!' // Block-scoped variable 'sayHi3' used before its declaration.

// 3. Arrow function 
const sayHi3 = (name: string): void => {
    console.log(`Hello ${name}!`);
} 

sayHi3('John'); // 'Hello John!'


// Create 3 functions that takes 2 number arguments and returns their product
// product1(3, 5) -> 15
function product1(n1: number, n2: number): number {
    return n1 * n2;
}

const product2 = function (n1: number, n2: number): number {
    return n1 * n2;
}

const product3 =  (n1: number, n2: number): number => {
    return n1 * n2;
}

console.log(product1(3, 5));
console.log(product2(3, 5));
console.log(product3(3, 5));

// Default parameters - ES6
const product4 =  (n1: number = 0, n2: number = 1): number => {
    return n1 * n2;
}

product4(); // 0
product4(5); // 5
product4(5, 2); // 10


// Rest parameters - ES6
function sum(...someNumbers: number[]): number {
    let sum = 0;

    for(const num of someNumbers) {
        sum += num;
    }

    return sum;
}

console.log(sum(1)); // 1
console.log(sum(1, 5)); // 6
console.log(sum(1, 5, 10)); // 16
console.log(sum(1, 5, 10, 20)); // 36


const concatCustom = (...someStrings: string[]): string => {
    return someStrings.join(' ');
}

console.log(concatCustom('Hello')); // 'Hello'
console.log(concatCustom('John', 'Doe')); // 'John Doe'
console.log(concatCustom('I', 'like', 'JS', 'and', 'TS')); // 'I like JS and TS'


// IIFE - Immediately Invoked Function Expression 
function funcA(): void {
    console.log('Function A');
}

// Explicitly invoking the function
funcA(); // 'Function A'

(function (): void {
    console.log('Function IIFE');
})();