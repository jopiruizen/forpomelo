export const currencies = [
    'EUR',
    'SGD',
    'USD',
    'PHP',
];

export const merchants = [
    'SM', 
    'UOB',
    'NTUC',
    'DBS',
    'SLACK',
];

export function randomRange (min, max) {
    const actualMax = max + 1;
    const rand = Math.floor( Math.random() * (actualMax - min)) + min; 
    //console.log("Random Generated...: ", rand);
    return rand;
}

export function randomElement(array) {
    let index = randomRange(0,array.length-1);
    return array[index];
}

export function randomTransaction() {
    return {
        currency: randomElement(currencies),
        merchant: randomElement(merchants),
        amount: randomRange (10, 500),
    }
}