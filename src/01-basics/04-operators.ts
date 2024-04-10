// Assignment 

let num: number = 10;

num += 5; // num is 15

num -= 3; // num is 12 

num *= 5; // num is 60 

num /= 10; // num is 6 

num **= 2; // num is 36

num %= 5; // num is 1


console.log(3 ** 4); // 81

console.log(13 % 5); // 3
console.log(5 % 13); // 5
console.log(1000 % 1001); // 1000


// Arihmetic -, +, *, /, %, ** 

// Increment and decrement 
let i = 10; // Type is inferred as a number 
console.log(i++); // 10
console.log(i); // 11

console.log(i--); // 11
console.log(i); // 10

let j = 5;
console.log(++j); // 6
console.log(j); // 6

console.log(--j); // 5
console.log(j); // 5


// Comparison operator
console.log(3 === 3); // true
console.log(3 !== 3); // false

console.log(5 > 3); // true
console.log(5 > 5); // false
console.log(5 >= 5); // true


// Logical operators AND OR NOT
console.log(3 > 2 && 0 !== 0); // false
console.log(3 > 2 || 0 !== 0); // true
console.log(!true); // false
console.log(!false); // true

console.log(!(true || false) && !(3 > 5)); // false
