const emptyArray1: number[] = []; // empty array ---- this is the perferred way to initalize an empty array
const emptyArray2: boolean[] = new Array<boolean>(); // empty array

const fruits: string[] = [ 'Kiwi', 'Apple', 'Banana', 'Lemon' ];

// how to check is a varible is an array? use Array.isArray(args) whch returns a boolean
console.log(typeof fruits); // 'object' -- typeof return what type the variable is but here will return object
console.log(Array.isArray(fruits)); // true

console.log(fruits.length); // 4

// Update 'Apple' with 'Grapes'
fruits[1] = 'Grapes';

console.log(fruits[1]); // 'Grapes'
console.log(fruits); // [ 'Kiwi', 'Grapes', 'Banana', 'Lemon' ]


// Adding elements to the end - tail
//push() - adds a new element to an array (at the end) and returns the new array's length.
fruits.push('Orange'); // 5
fruits.push('Pineapple', 'Strawberry'); // 7

console.log(fruits); // [ 'Kiwi','Grapes', 'Banana','Lemon', 'Orange','Pineapple', 'Strawberry']


// Adding elements to the start - head
//unshift() - adds a new element to an array (at the beginning), and "unshifts" older elements. It also returns the new array's length.
fruits.unshift('Melon'); // 8
fruits.unshift('Blueberry', 'Cranberry'); // 10

console.log(fruits); // [ 'Blueberry', 'Cranberry','Melon', 'Kiwi','Grapes', 'Banana','Lemon', 'Orange','Pineapple', 'Strawberry']


// Remove elements from the end - tail
//pop() - removes and returns the last element from an array. It returns the element removed.
// type is: string | undefined -- undefined is added here to be safe in case the array is empty 
let poppedFruit: string | undefined = fruits.pop(); // 'Strawberry'
fruits.pop(); // 'Pineapple'
fruits.pop(); // 'Orange'
fruits.pop(); // 'Lemon'
console.log(fruits); // [ 'Blueberry', 'Cranberry','Melon', 'Kiwi','Grapes', 'Banana' ]


// Remove element from the start - head
//shift() - removes the first array element and "shifts" all other elements to a lower index. It also returns the removed element.
let shiftedFruit: string | undefined = fruits.shift(); // 'Blueberry'
fruits.shift(); // 'Cranberry'
fruits.shift(); // 'Melon'
console.log(fruits); // [ 'Kiwi','Grapes', 'Banana' ]


/* splice() method -> adds new items to an array. it will return the removed element(s).
first argument that defines the position where new elements should be added (spliced in).
second argument defines how many elements should be removed.
rest of the arguments define the new elements to be added. */
const ages: number[] = [ 1, 2, 3, 4, 5 ]; // element 3 is at index if 2

// Remove 3
//ages.slice(startIndex, countRemove, ...) rest items to be added starting at that index
ages.splice(2, 1); // [3]
console.log(ages); // [ 1, 2, 4, 5 ]

// remove 2, 4 and add 10, 20 instead -> [ 1, 10, 20, 5 ]
const removedAges: number[] = ages.splice(1, 2, 10, 20); // [2, 4]
console.log('Removed elements', removedAges); // [2, 4]
console.log('Updated ages array', ages); // [ 1, 10, 20, 5 ]

// Add 100, 500, 750 bt 1 and 10 -> [ 1, 100, 500, 750, 10, 20, 5 ]
ages.splice(1, 0, 100, 500, 750);
console.log(ages); // [ 1, 100, 500, 750, 10, 20, 5 ]


const flags: boolean[] = [true, false, 2 === 2, 5 < 10, !false ];

// get first element 
console.log(flags[0]); // true

// gel last element
console.log(flags[flags.length - 1]); // true
console.log(flags.at(-1)); // true


const numbers: number[] = [ 1, 2, 3, 4, 5 ];

let middle: number | number[]; // undefined
let middleIndex: number;

// Middle element 3
if(numbers.length % 2 === 0) {
    middleIndex = numbers.length / 2;
    middle = [numbers[middleIndex - 1], numbers[middleIndex]];
}
else {
    middleIndex = (numbers.length - 1) / 2;
    middle = numbers[middleIndex];
}

console.log(middle);


/*
indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
includes() - checks the array if it includes a certain value and returns a boolean. it is case-sensitive!
lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present.
*/
const cities: string[] = [ 'Chicago', 'Rome', 'Berlin', 'Rome', 'Brugge' ];

console.log(cities.indexOf('Rome')); // 1
console.log(cities.lastIndexOf('Rome')); // 3

console.log(cities.indexOf('Berlin')); // 2
console.log(cities.lastIndexOf('Berlin')); // 2

console.log(cities.indexOf('Paris')); // -1
console.log(cities.lastIndexOf('Paris')); // -1

console.log(cities.includes('Rome')); // true
console.log(cities.includes('ROME')); // false
console.log(cities.includes('Chicago')); // true


const nums1: number[] = [1, 2, 3];
const nums2: number[] = [4, 5, 6];
const nums3: number[] = [7, 8, 9];
//concat() -> creates a new array by merging (concatenating) existing arrays.
console.log(nums1.concat(nums2)); // [1, 2, 3, 4, 5, 6]
console.log(nums1.concat(nums2, nums3, nums2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6]

// SPREAD OPERATOR (...) ES6 -- this take the collection and spread its elements into individual arugments to a method or another array
const numsAll: number[] = [...nums1, ...nums2, ...nums3]; 
console.log(numsAll); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const someNumbers: number[] = [10, 20, 5, 7, -3, 25];

// max and min -- here were spreading the elements as args to find max/min
console.log(Math.max(...someNumbers)); // 25
console.log(Math.min(...someNumbers)); // -3

//reverse() -> reverses an array.
someNumbers.reverse();
console.log(someNumbers); // [ 25, -3, 7, 5, 20, 10 ]

//slice() -> slices out a piece of an array and returns a new array. (gets portion of array - like slice in strings)
console.log(someNumbers.slice(-3)); // [5, 20, 10]
console.log(someNumbers.slice(0, 3)); // [ 25, -3, 7 ]


const months: string[][] = [
    ['Jan', 'Feb', 'Mar'],
    ['Apr', 'May', 'Jun'],
    ['Jul', 'Agu', 'Sep'],
    ['Oct', 'Nov', 'Dec']
];

//flat() -> reduces the dimensionality of an array and creates a new array with sub-array elements concatenated to a specified depth.
console.log(months);
console.log(months.flat()); //single dimensional array now
console.log([1, [2, 3, [4, 5, [6]]]].flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ] -- args here is how many time you want to flat


const cities2: string[] = [ 'Chicago', 'Rome', 'Berlin', 'brugge' ];

/*
toString() -> converts an array to a string of (comma separated) array values.
join() -> joins all array elements into a string. we can specify the separator. 
*/
console.log(cities2.toString()); // 'Chicago,Rome,Berlin,Brugge'
console.log(cities2.join()); // 'Chicago,Rome,Berlin,Brugge' -- join() with no arg is like toStrings()
console.log(cities2.join(' | ')); // 'Chicago | Rome | Berlin | Brugge'

//sort() -> sorts an array alphabetically - be careful with the numbers! 
//This functions performs a lexicographic (dictionary) sort by default, treating numbers as strings. 
cities2.sort();

console.log(cities2); // [ 'Berlin', 'Chicago', 'Rome', 'brugge' ]

const someNumbers2: number[] = [1, 11, 2, 4, 20, 50];

// [1, 2, 4, 11, 20, 50]

someNumbers2.sort();

console.log(someNumbers2); // [ 1, 11, 2, 20, 4, 50 ] -- sorted by 1st place value first

someNumbers2.sort((a, b) => a - b); //comparison callback?
console.log(someNumbers2); // [1, 2, 4, 11, 20, 50]

//descending order 
someNumbers2.sort((x, y) => y - x);
console.log(someNumbers2); // [ 50, 20, 11, 4, 2, 1 ]


const capitals: string[] = [ 'Washington', 'Berlin', 'Rome', 'Kyiv' ];

// Before ES6 
// let capitalUS: string = capitals[0];
// let capitalGermany: string = capitals[1];
// let capitalItaly: string = capitals[2];
// let capitalUkraine: string = capitals[3];

// ES6 destructuring Arrays
let [capitalUS, capitalGermany, capitalItaly, capitalUkraine] = capitals;

console.log(capitalUS); // 'Washington'

if(capitalItaly.startsWith('R')) {
    // run code
}
else {
    // run this code
}


const credentials: string[] = [ 'johndoe@gmail.com', 'Test1234', 'johnxdoe', '000-000-0000' ];

// Skipping some elements while destructuring
let [ email, , , phone ] = credentials;

console.log(email); // 'johndoe@gmail.com'
console.log(phone); // 000-000-0000'