// filter function

const number = [1, 2, 3, 4, 5, 6];

const main = number.filter(function (ele) {
    return ele % 3 === 0; // return as list of even number for example
})
console.log(main);
