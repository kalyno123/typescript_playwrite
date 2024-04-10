const students: string[] = ['Alex', 'John', 'Maria'];

// Print each name with uppercases
students.forEach((name: string): void => {
    console.log(name.toUpperCase());
});


// Print first letter for each name 
students.forEach((name: string): void => {
    console.log(name[0]);
});


// Print first + last letter from each name and uppercased
students.forEach((name: string): void => {
    name = name.toUpperCase();
    let first: string = name[0];
    let last: string | undefined = name.at(-1);

    console.log(first + last);
});


const numbers3: number[] = [ -2, 5, 0, 10, 7 ];

// Multiple each of these elements with 3 and return them as a new array -> [ -6, 15, 0, 30, 21 ]

//const numbers3New: number[] = [];

// 1. Using for...of loop
// for(const num of numbers3) {
//     numbers3New.push(num * 3);
// }

// 2. Using for loop
// for(let i = 0; i < numbers3.length; i++) {
//     numbers3New.push(numbers3[i] * 3);
// }

// 3. Using forEach() method 
// numbers3.forEach((num: number): void => {
//     numbers3New.push(num * 3);
// });

console.log(numbers3.map((x) => x * 3));

const numbers3New: number[] = numbers3.map((num: number):number => {
    return num * 3;
});

console.log(numbers3New); // [ -6, 15, 0, 30, 21 ]


const objects: string[] = [ 'Mouse', 'Computer', 'Keyboard', 'Phone'];

/*
Create anew array which stores whether the first or last letter of the object given in the array
If the object has odd length -> store first letter
If the object had even length -> store last letter

[ 'M', 'r', 'd', 'P' ]
*/

console.log(objects.map((x) => x.length % 2 !== 0 ? x[0] : x.at(-1)));

const objectsSolution = objects.map((obj: string): string | undefined => {
    if(obj.length % 2 !== 0) return obj[0];
    return obj.at(-1);
});

console.log(objectsSolution);


const nums: number[] = [ 7, 5, -3, 0, 3, 10, -1 ];

// find all the negative numbers -> [-3, -1]
// find all the positive numbers -> [7, 5, 3, 10]
// find all the even numbers -> [0, 10]
// find all the numbers divisible by 5-> [5, 0, 10]

console.log(nums.filter((x) => x < 0)); // [-3, -1]
console.log(nums.filter((x) => x > 0)); // [7, 5, 3, 10]
console.log(nums.filter((x) => x % 2 === 0)); // [0, 10]
console.log(nums.filter((x) => x % 5 === 0)); // [5, 0, 10]

const negs: number[] = nums.filter((num:number): boolean => {
    return num < 0;
});

console.log(negs); // [-3, -1]

// Check if all the elements are more than zero - pos -> false
console.log(nums.every((x) => x > 0)); // false

console.log(nums.every((x: number): boolean => {
    return x > 0;
}));

// Check if any number is even -> true
console.log(nums.some((x) => x % 2 === 0)); // true
console.log(nums.some((x: number): boolean => {
    return x % 2 === 0;
}));


// Find first even number in the array
let fEven: number | undefined;

for(const num of nums) {
    if(num % 2 === 0) {
        fEven = num;
        
    }
}

console.log('First even', fEven);

console.log(nums.find((x) => x % 2 === 0)); // 0
console.log(nums.findIndex((x) => x % 2 === 0)); // 3

console.log(nums.find((x: number): number | undefined => {
    return x % 2 === 0 ? x : undefined;
}));


// 7, 5, -3, 0, 3, 10, -1
// Max: 10
// Min: -3
// Sum: 21

let sum2 = 0;

for(const num of nums) {
    sum2 += num;
}

console.log(sum2);
console.log(nums.reduce((sum, num) => sum += num, 0));
console.log(nums.reduce((sum, num) => {
    return sum += num;
}, 0));


let max2 = -Infinity;

for(const num of nums) {
    if(num > max2) max2 = num;
}

console.log(max2);

console.log(nums.reduce((max, num) => num > max ? num : max, -Infinity));

console.log(nums.reduce((max, num) => {
    if(num > max) return num;
    return max;
}, -Infinity));