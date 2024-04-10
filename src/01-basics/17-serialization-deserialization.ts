const string_response: string = `[
    {
        "ID": 1,
        "DOB": "2020-09-20T00:00:00.000Z",
        "EMAIL": "tech.global@techglobal.com",
        "FIRST_NAME": "Tech",
        "LAST_NAME": "Global",
        "INSTRUCTOR_ID": 1,
        "INSTRUCTOR_NAME": "Prof. Jalen Peaks"
    },
    {
        "ID": 2,
        "DOB": "1990-01-01T00:00:00.000Z",
        "EMAIL": "john.doe@techglobal.com",
        "FIRST_NAME": "John",
        "LAST_NAME": "Doe",
        "INSTRUCTOR_ID": 2,
        "INSTRUCTOR_NAME": "Prof. Vivian Schenz"
    }
]`;

// Deserialize your JSON Object - meaning convert it to JS/TS object 
const obj = JSON.parse(string_response);

console.log(obj);
console.log(obj.length);

obj.forEach((el: { FIRST_NAME: any; }) => {
    console.log(el.FIRST_NAME);
});


// Serialization 
const request_body: {
    FIRST_NAME: string;
    LAST_NAME: string;
    EMAIL: string;
    DOB: string;
} = {
    FIRST_NAME: "Kaly",
    LAST_NAME: "A",
    EMAIL: "ab@gmail.com",
    DOB: "11/11/2000"
};

// Serialize your JS/TS Object - meaning convert it to string object 
const string_object: string = JSON.stringify(request_body);

console.log(string_object);