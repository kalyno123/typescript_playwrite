/*
function gotoUrl() {
    setTimeout(() => {
       console.log('1. URL visited');
    }, 3000);
}


function clickOnElement() {
    setTimeout(() => {
       console.log('2. Element clicked and new page is loaded');
    }, 2000);
}


function validateText() {
    setTimeout(() => {
       console.log('3. Text validated');
    }, 1000);
}


function test() {
    gotoUrl();
    clickOnElement();
    validateText();
}

test();
*/

// Output and that is not expected. We need to synchronize these methods or test
// 3. Text validated
// 2. Element clicked and new page is loaded
// 1. URL visited

// Solution 1: Before ES6, programmers would used callbacks to resolve this issue 
function gotoUrl(callback, err) {
    setTimeout(() => {
        const network = true;
        if (network) {
            console.log('1. URL visited');
            callback();
        }
        else {
            console.log('There is no network! URL cannot be visited!');
            err();
        }

    }, 3000);
}


function clickOnElement(callback, err) {
    setTimeout(() => {
        const elementFound = true;
        if (elementFound) {
            console.log('2. Element clicked and new page is loaded');
            callback();
        }
        else {
            console.log('Click did not happen! No element found!');
            err();
        }
    }, 2000);
}


function validateText() {
    setTimeout(() => {
        const textMatch = true;
        if (textMatch) {
            console.log('3. Text validated');
        }
        else {
            console.log('Text does not match!');
        }
    }, 1000);
}


function test() {
    gotoUrl(() => {
        clickOnElement(() => {
            validateText();
        }, () => {

        })
    },
        () => {

        })
}

test();

//setTimeout(): is similar concept to thread.sleep() .. its default wait time is 


