const student1 : {
    readonly id: number,
    fname: string,
    lname?: string, // ? -- optional attribute
    age: number | string // can use literal type as well 
    courseName?: string
} = {
    id : 1,
    fname: "John",
    lname: "Doe",
    age: 25
};

console.log(student1); // { fname: 'John', lname: 'Doe', age: 25 }

console.log(student1['age']); // 25
console.log(student1.age); //25

student1.fname = 'Jane';
//student1.id = 3; // Cannot assign to 'id' because it is a read-only property.

console.log(student1.fname); //'Jane'

delete student1.lname;
console.log(student1); // { id: 1, fname: 'Jane', age: 25 }

student1.courseName = 'SDET';



const person10 : {
    fname: string,
    lname: string, 
    readonly batchId: number 
    faveCity: string
} = {
    fname: "Alex",
    lname: "Smith",
    batchId : 10,
    faveCity: 'Berlin'
};

console.log(person10.fname); //Alex
console.log(person10.lname); //Smith
console.log(person10.batchId); //10
console.log(person10.faveCity); //Berlin


for (const key in person10){
    console.log(`The key is ${key} and the value is ${person10[key as keyof typeof person10]}`);
    //console.log(key);
    //console.log(person10[key as keyof typeof person10]);
    
    //keyof is an indexed type query operator in typescipt. it is used to obtain the union type of keys (property name) frm given type.
}

const teacher = {

}