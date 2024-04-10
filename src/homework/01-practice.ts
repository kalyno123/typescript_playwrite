/* TASK 1
Write a function named as tripleWord() which takes a string word as 
an argument and returns the given word back tripled when invoked.
NOTE: Assume you will not be given an empty word.
Examples: tripleWord("Tech") -> "TechTechTech"
*/
//let dupWord : any = 'Phone';
//console.log(dupWord * 3);
function tripleWord(s: string): string {
    return s.repeat(3);
}

/* TASK 2
Write a function named hasBlue() which takes a string argument and returns 
true if the string has an occurrence of blue word, returns false otherwise.
NOTE: Ignore upper/lower cases.
Examples:
hasBlue("1234") -> false
hasBlue("ABLUEC") -> true
*/
function hasBlue(color : string): boolean {
    return color.includes(`blue`);
}

/* TASK 3
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
*/
/*
function firstPos(arr: number[]): number {
    for (let num of arr){
        if (num > 0) return num;
    }
}
*/

/* TASK 4
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
*/
/*
function firstPos(arr: number[]): number {
    for (let num of arr){
        if (num > 0) return num;
    }
}
*/

/* TASK 5
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the longest count of characters, always return the first occurrence.
*/
/*
function firstLongest(arr1 : string[]): string{
    for (let str of arr1){
        if (str.length) return;
    }
}
*/

/* TASK 6
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the shortest count of characters, always return the last occurrence.
*/

/* TASK 7

*/