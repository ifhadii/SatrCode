const number = Math.ceil(-9.12);
const number_ = Math.ceil(9.12);

const number_1 = Math.floor(9.12);
const number_2 = Math.floor(-9.12);


const number_3 = Math.round(-9.12);
const number_4 = Math.round(-9.52);

const number_5 = Math.abs(-9);

const main = [1, 2, 3, -39, -199];
let x = Math.min(...main);

const main1 = [1, 2, 3, -39, -199];
let x1 = Math.max(...main1);


const str = '10.4';
const x4 = parseFloat(str);

const mm = '10';
const ms = parseInt(mm);

const ksr = 3.13;
const mmm = Math.trunc(ksr);

const hl_integer = 3;

function square(number) {
    if (isNaN(number)) 
        return 'Invalid input'
    return number * number;
}

console.log(square(4));


const pwo = Math.pow(3, 2);

const sqr = Math.sqrt(3);

let mk = -1
const sig = Math.sign(mk);

const mkl = 3 / 0;

const mkl_ = -3 / 0;
const random = Math.random();

var l = 234_234_233;

// console.log(l);

console.log(random);
console.log(mkl_);
console.log(mkl);
console.log(sig);
console.log(sqr);
console.log(pwo);
console.log(Number.isInteger(hl_integer));
console.log(mmm)
console.log(number);
console.log(number_);

console.log(number_1);
console.log(number_2);
console.log(number_3);
console.log(number_4);
console.log(number_5);

console.log(x);
console.log(x1);
console.log(x4);
console.log(typeof x4);