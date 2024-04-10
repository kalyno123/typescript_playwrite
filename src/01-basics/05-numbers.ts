console.log(NaN); // NaN
console.log(typeof NaN); // 'number'


console.log(isNaN(12.5)); // false
console.log(isNaN(0)); // false

console.log(isNaN(NaN)); // true

// Number properties 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER); 
console.log(Number.MIN_SAFE_INTEGER); 
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity


// Number functions - methods
let n1: number = 10.1234, n2: number = 100.55517;

console.log(n1.toString() + 1); // '10.12341'

// concatenation
console.log(n1.toString() + n2.toString()); // '10.1234100.55517'

// addition
console.log(n1 + n2); // 110.67851

console.log(n1.toFixed(2)); // '10.12'
console.log(n2.toFixed(2)); // '100.56'

console.log(n1.toPrecision(4)); // '10.12'
console.log(n2.toPrecision(4)); // '100.6'

// How to convert other Types to Numbers
// ^^ here is doing conversions using GLOBAL functions
let numS: string = '10.7';

console.log(Number(numS)); // 10.7
console.log(parseInt(numS)); // 10
console.log(parseFloat(numS)); // 10.7

// Number static methods - functions
// ^^ here is doing conversions using Number STATIC functions
console.log(Number.parseInt(numS)); // 10
console.log(Number.parseFloat(numS)); // 10.7

console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger(10)); // true

console.log(Number.isSafeInteger(100)); // true -- it is less than the alloted 64bits capcity 
console.log(Number.isSafeInteger(934857934875693658937465)); // false -- it is more than the alloted 64bits capcity 
