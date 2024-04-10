let number1: number = 7;
let number2: number = 3;
let number3: number = 2;
let number4: number = 10;
let number5: number = 25;

//abs(x) - returns the absolute value of x
console.log(Math.abs(-5)); // 5
console.log(number1 - number5); // 7-25 = -18
console.log(Math.abs(number1 - number5)); // |7-25| = 18

//max(x1,x2,..) - returns the number with the highest value
//min(x1,x2,..) - returns the number with the lowest value
console.log(Math.min(number1, number2)); // 3
console.log(Math.max(number1, number2)); // 7
console.log(Math.max(number1, number2, number3, number4, number5)); // 25
console.log(Math.min(number1, number2, number3, number4, number5)); // 2
//^^ Math.min & Math.max in JS+TS has unlimited args to find max/min

//pow(x, y) - returns the value of x to the power of y
console.log(2 ** 3); // 8
console.log(Math.pow(2, 3)); // 2^3 = 8 
console.log(Math.pow(5, 3)); // 125 

//sqrt(x) - returns the square root of x
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(25)); // 5

//round(x) - rounds x to the nearest integer
console.log(Math.round(12.51)); // 13
console.log(Math.round(12.50)); // 13
console.log(Math.round(12.49)); // 12

//ceil(x) - returns x, rounded upwards to the nearest integer
console.log(Math.ceil(12.51)); // 13
console.log(Math.ceil(12.50)); // 13
console.log(Math.ceil(12.49)); // 13
console.log(Math.ceil(12.01)); // 13
console.log(Math.ceil(12.00)); // 12

//floor(x) - returns x, rounded downwards to the nearest integer
console.log(Math.floor(12.99)); // 12
console.log(Math.floor(12.50)); // 12
console.log(Math.floor(12.49)); // 12
console.log(Math.floor(12.01)); // 12
console.log(Math.floor(13.00)); // 13

//trunc(x) - returns the integer part of a number (x) -- drops the decimal values
console.log(Math.trunc(12.99)); // 12
console.log(Math.trunc(12.50)); // 12
console.log(Math.trunc(12.49)); // 12
console.log(Math.trunc(12.01)); // 12
console.log(Math.trunc(13.00)); // 13

//random() - returns a random number between 0 and 1 (0 included but 1 excluded)
// Formula --> Math.floor(Math.random() * (max - min + 1) + min
console.log(Math.random());

// Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Random number between 7 and 83 both inclusive (83 - 7 + 1)
console.log(Math.floor(Math.random() * 77) + 7);

// Random number between 15 and 25
console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);
