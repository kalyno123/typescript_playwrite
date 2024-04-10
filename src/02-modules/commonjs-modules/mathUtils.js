/*
const PI = 3.14;

function getRandomNumber (num1, num2) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doMath(num1, num2, operation){
    let result;
    switch(operation) {
        case '+': 
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/': 
            result = num1 / num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        default:
                throw Error('The math could not complete!');
    }
    return result;
}

// Exporting function one by one individually
module.exports.getRandomNumber = getRandomNumber;
module.exports.doMath = doMath;
module.exports.PI = PI;
*/

/*
const PI = 3.14;

function getRandomNumber (num1, num2) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doMath(num1, num2, operation){
    let result;
    switch(operation) {
        case '+': 
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/': 
            result = num1 / num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        default:
                throw Error('The math could not complete!');
    }
    return result;
}


// const MathHelper = {
//     PI,
//     getRandomNumber,
//     doMath
// };

// module.exports.MathHelper = MathHelper;


module.exports.MathHelper = {
    PI,
    getRandomNumber,
    doMath
};
*/

/*
module.exports.PI = 3.14;

module.exports.getRandomNumber = function (num1, num2) {
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.doMath = (num1, num2, operation) => {
    let result;
    switch(operation) {
        case '+': 
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/': 
            result = num1 / num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        default:
                throw Error('The math could not complete!');
    }
    return result;
}
*/

class MathHelper {
    static PI = 3.14;

    static getRandomNumber(num1, num2) {
        const min = Math.min(num1, num2);
        const max = Math.max(num1, num2);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static doMath(num1, num2, operation) {
        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            default:
                throw Error('The math could not complete!');
        }
        return result;
    }
}

module.exports.MathHelper = MathHelper;

