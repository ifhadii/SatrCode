const num = [1, 2, 3, 4];

let x = num.indexOf(1);
let x1 = num.indexOf(1, 3);
let x2 = num.indexOf(1, -2);



console.log(x);
console.log(x1);
console.log(x2);

console.log('----');

const gr = ['red', 'blue', 'green', 'black'];

let x3 = gr.lastIndexOf('red');
let x4 = gr.lastIndexOf('green', 3);
let x5 = gr.lastIndexOf('black', 4);

console.log(x3);
console.log(x4);
console.log(x5);
