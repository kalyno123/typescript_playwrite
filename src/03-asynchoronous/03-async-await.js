function gotoUrl() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This is url method running');
            const network = true;
            if (network) resolve('URL visited!');
            else reject('No network, no URL!');
        }, 3000);
    });
}


function clickOnElement() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This is click method running');
            const elementFound = true;
            if (elementFound) resolve('Element Clicked!');
            else reject('Element not found!');
        }, 2000);
    });
}


function validateText() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('This is validate method running');
            const textMatched = true;
            if (textMatched) resolve('Validation passed!');
            else reject('Text did not match and validation failed!');
        }, 1000);
    });
}

async function testTGBackendTestinPage() {
    try{
        await gotoUrl();
        await clickOnElement();
        await validateText();
    } catch(err) {
        console.log(err);
    }
}

testTGBackendTestinPage();
