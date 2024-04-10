/* 
- var, let, const are all used to create variables
- 'var' used to be the only keyword before ES6 (2015)
- 'var' is hoistered and does not support block scope - calling variable outside code block

- 'let' is the new 'var' after ES6 which supports block scope and cannot be hoisted 
- both 'var' and let can be reassigned 

- 'const' is like 'let' thus it can support block scope and cannot be hoisted 
- 'const' difference from 'let' --> it cannot be reassigned 
*/

console.log(age); // hoisted meaning declaration is always move to the top
var age = 25;

/*
JS interprets above code as below

var age:

console.log(age);

age = 25
*/

//console.log(name);
let name = 'John'; // Error as let or const is not hoisted


// Block scope - cannot read let and const variables outside of code block
let pet;
var student;
{
    var myClass1 = 'JS vs TS';
    let myClass2 = 'JS vs TS';
    const myClass3 = 'JS vs TS';
    pet = "dog";
    student = "mila";
}

console.log(myClass1); // 'JS vs TS'
console.log(pet); // dog
console.log(student); // mila
// console.log(myClass2); // ReferenceError: myClass2 is not defined
// console.log(myClass3); // ReferenceError: myClass3 is not defined


// let vs const 
let today = 'Monday';
today = 'Tuesday';
today = 'Wednesday';

const pi = 3.14;
//pi = 5; // const variable cannot be reassign --> TypeError: Assignment to constant variable.
//console.log(pi); 

// use 'let' when you know you'll be reassigning often (changing varible's value)
// use 'const' when you know you wont need to reassign as 'const' makes the variable final (cannot be changed once in)

// block scope -- can declare 'let' and 'const' global varibles to use inand out of of code block

