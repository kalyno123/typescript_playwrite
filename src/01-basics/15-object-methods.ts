const instructor: {
    fullname: string;
    fields: string[];
    address: {
        street_1: string;
        street_2: string;
        city: string;
        state: string;
        country: string;
        zipcode: string;
    };
    students: {
        fname: string;
        lname: string;
        age: number;
    }[];
} = {
    fullname: 'John Doe',
    fields: [ 'Computer Science', 'Economics' ],
    address: {
        street_1: 'abc street',
        street_2: '#2',
        city: 'Chicago',
        state: 'IL',
        country: 'US',
        zipcode: '12345'
    },
    students: [
        {
            fname: 'Kaly',
            lname: 'A',
            age: 15
        },
        {
            fname: 'Adam',
            lname: 'B',
            age: 21
        },
        {
            fname: 'Daria',
            lname: 'B',
            age: 23
        }
    ]
};

// Instructor Keys: fullname, fields, address, stduents
// Instructor Values: 
// Instructor Key-Value Pairs

console.log('\n---------------Getting all keys with Object.keys() method-----------------\n');
const allKeys: string[] = Object.keys(instructor);

console.log(allKeys); // [ 'fullname', 'fields', 'address', 'students' ]

for(const key of allKeys) {
    console.log('Key is', key);
    console.log('\tValue is\t\n\t', instructor[key as keyof typeof instructor]);
}


console.log('\n---------------Getting all values with Object.values() method-----------------\n');
const allValues = Object.values(instructor);
console.log(allValues);

allValues.forEach((value) => {
    console.log(value);
});

for(const value of Object.values(instructor)) {
    console.log(value);
}

const iphone: {
    brand: string,
    price: number,
    quantity: number
} = {
    brand: 'iPhone',
    price: 990.99,
    quantity: 5
};

console.log(Object.keys(iphone)); // [ 'brand', 'price', 'quantity' ]
console.log(Object.values(iphone)); // [ 'iPhone', 990.99, 5 ]
console.log(Object.entries(iphone)); // [ [ 'brand', 'iPhone' ], [ 'price', 990.99 ], [ 'quantity', 5 ] ]

for(const entry of Object.entries(iphone)) {
    console.log('Entry', entry);
    console.log('Entry Key', entry[0]);
    console.log('Entry Value', entry[1]);
}

for(const [key, value] of Object.entries(iphone)) {
    console.log('Key is', key);
    console.log('Value is', value);
}