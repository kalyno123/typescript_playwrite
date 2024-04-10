let s1: string = 'John';
let s2: string = "Alex";
let s3: string = `Robert`;

// Use of backticks - String Templates 
let fName: string = 'John';
let lName: string = 'Doe';

console.log('Fullname = ' + fName + ' ' + lName);
console.log(`Fullname = ${fName} ${lName}`);

let product_name: string = 'Phone';
let product_quantity: number = 5;
let product_price: number = 100;

// String interpolation ${}
console.log(`The total price of `+ product_quantity);
//${product_name} is = $${product_quantity * product_price}`);


let paragraph: string = `   It is replacing variables or expressions with real values.
Template literals provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation. 
Variable Substitution: Template literals allow variables in strings. 
Expression Substitution: Template literals allow expressions in strings. 
`;

console.log(paragraph);

/* OUTPUT will look like below
   It is replacing variables or expressions with real values.
Template literals provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation. 
Variable Substitution: Template literals allow variables in strings. 
Expression Substitution: Template literals allow expressions in strings. 
*/