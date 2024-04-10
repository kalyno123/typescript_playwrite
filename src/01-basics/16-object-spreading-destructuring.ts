// SPREAD OPERATOR
const array1: number[] = [ 1, 2, 3 ];
const array2: number[] = [4, ...array1, 5];

console.log(array1); // [ 1, 2, 3 ]
console.log(array2); // [ 4, 1, 2, 3, 5 ]

const computer1: {
    brand: string,
    ssd: number
} = {
    brand: 'MacBook Pro',
    ssd: 512
};

const computer2: {
    brand: string,
    ssd: number,
    refurbished: boolean
} = {
    ...computer1,
    refurbished: true
};

console.log(computer1); // { brand: 'MacBook Pro', ssd: 512 }
console.log(computer2); // { brand: 'MacBook Pro', ssd: 512, refurbished: true }


// DESTRUCTURING
const array3: string[] = [ 'Jafeth', 'Kaly', 'Gulmira' ];

// const el1 = array3[0];
// const el2 = array3[1];
// const el3 = array3[2];

const [el1, el2, el3] = array3;

const airpods: {
    brand: string,
    price: number,
    quantity: number
} = {
    brand: 'Apple',
    price: 139.99,
    quantity: 5
};

// let brand = airpods.brand;
// let price = airpods.price;
// let quantity = airpods.quantity;

let { brand, quantity } = airpods;

console.log(brand); // 'Apple'
console.log(quantity); // 5


// Enhanced object literals 
let storeAddress: string = 'Chicago';
let storeName: string = 'Windy City Store';
const products: string[] = [ 'Mug', 'Gift', 'T-shirt' ];

// Before ES6
// const store: {
//     storeAddress: string;
//     storeName: string;
//     products: string[];
// } = {
//     storeAddress: storeAddress,
//     storeName: storeName,
//     products: products
// }

// AFTER ES6
const store: {
    storeAddress: string;
    storeName: string;
    products: string[];
} = {
    storeAddress,
    storeName,
    products
}

console.log(store);