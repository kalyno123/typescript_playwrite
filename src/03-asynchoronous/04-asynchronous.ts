function gotoCostco(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            console.log('GO TO COSTCO');
            if(true) resolve();
            else reject('Costco is closed!');
        }, 2000)
    });
}

function getMeat(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            console.log('GET MEAT');
            if(true) resolve();
            else reject('There was no meat!');
        }, 1500)
    });
}

function cook(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            console.log('COOK');
            if(true) resolve();
            else reject('Could not cook!');
        }, 3000)
    });
}

function serve(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            console.log('SERVE');
            if(true) resolve();
            else reject('Serving issue!');
        }, 1000)
    });
}

function eat(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            console.log('EAT');
            if(true) resolve();
            else reject('Could not eat!');
        }, 500)
    });
}

/*
go to costco -> 2 seconds
get meat -> 1.5 seconds
cook -> 3 seconds
serve ->  1 second
eat -> 0.5 second

TOTAL: 8+ seconds
*/

// async await way to synchronize the party 
async function party1(): Promise<void> {
    try{
        await gotoCostco();
        await getMeat();
        await cook();
        await serve();
        await eat();
    } catch(err) {
        console.log('Party failed due to', err);
    }
}



function party2(): void {
    gotoCostco()
    .then(() => getMeat())
    .then(() => cook())
    .then(() => serve()) 
    .then(() => eat())
    .catch((err) => console.log('Party failed due to', err));
}


async function testAll() {
    await party1();
    party2();
}

testAll();