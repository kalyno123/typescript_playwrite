const { element } = require("wd/lib/element");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const mood = true;
        if (mood) resolve('Promise fullfilled!');
        else reject('Promise rejected!!!');
    }, 2000)
});

console.log(myPromise);

const promiseAnAdultAge = new Promise((success, fail) => {
    const age = Math.floor(Math.random() * 100);

    if (age >= 18) success(`You got age as ${age}`);
    else fail(`You got age as ${age}`);
});

console.log(promiseAnAdultAge);



function gotoUrl() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const network = true;
            if (network) resolve('URL visited!');
            else reject('No network, no URL!');
        }, 3000);
    });
}


function clickOnElement() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const elementFound = true;
            if (elementFound) resolve('Element Clicked!');
            else reject('Element not found!');
        }, 2000);
    });
}


function validateText() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const textMatched = true;
            if (textMatched) resolve('Validation passed!');
            else reject('Text did not match and validation failed!');
        }, 1000);
    });
}

function test() {
    gotoUrl()
        .then((dataURL) => {
            console.log(dataURL);
            return clickOnElement();
        })
        .then((elementData) => {
            console.log(elementData);
            return validateText();
        })
        .then((textData) => {
            console.log(textData);
        })
        .catch((error) => console.log(error));
}

test();

// function test2() {
//     gotoUrl()
//         .then((dataURL) => {
//             console.log(dataURL);
//             clickOnElement()
//                 .then((elementData) => {
//                     console.log(elementData);
//                     validateText()
//                         .then((TextData) => {
//                             console.log(TextData);
//                         })
//                         .catch((TextError) => console.log(TextError));
//                 })
//                 .catch((ElementError) => console.log(ElementError));
//         })
//         .catch((URLerror) => console.log(URLerror));
// }

