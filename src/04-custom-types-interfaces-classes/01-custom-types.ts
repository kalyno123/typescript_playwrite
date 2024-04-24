// string, number, undefined, null, boolean, any, void, literals, unions -> pre-built

// Custom Type Alias

type Person = {
    readonly id: number,
    fname: string,
    lname: string,
    age?: number,
    favActivities?: string[],
    getInfo: () => string,
    address?: {
        street: string,
        city: string,
        state: string,
        zip: string,
        country: string
    }
};


const p1: Person = {
    id: 1,
    fname: 'John',
    lname: 'Doe',
    age: 25,
    favActivities: ['Code', 'Watch movie'],
    getInfo() {
        return `Info = ${this.fname} ${this.lname}`;
    }
};

console.log(p1);
console.log(p1.age); // 25
console.log(p1.getInfo());

p1.age = 35;
console.log(p1.age); // 35

// p1.id = 2; // Cannot assign to 'id' because it is a read-only property.
console.log(p1.id); // 1


const p2: Person = {
    id: 2,
    fname: 'Jane',
    lname: 'Doe',
    address: {
        street: 'abc street',
        city: 'Chicago',
        state: 'IL',
        zip: '12345 -1234',
        country: 'US',
    },
    getInfo() {
        return `Info = ${this.fname} ${this.lname}`;
    }
};

p2.age = 20;

console.log(p2);



type Employee = {
    fullname: string,
    age: number,
    department: string
}

type Manager = {
    department: string,
    role: string
}

type ManagerEmployee = Employee & Manager;

const me1: ManagerEmployee = {
    fullname: 'Daria',
    age: 23,
    department: 'IT',
    role: 'QA Manager'
}

type Mix = Person | Employee | Manager;

const m1: Mix = {
    department: 'IT',
    role: 'Developer'
}

const m2: Mix = {
    fullname: 'Gulmira',
    age: 22,
    department: 'IT'
}
