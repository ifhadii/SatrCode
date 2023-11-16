const n = [1, 2, 3, 4];

const BigMan = n.reduce(function (accumulator, currentValue, index, array) {
    return accumulator + currentValue; 
})


const BigMan1 = n.reduce(function (accumulator, currentValue, index, array) {
    return accumulator + currentValue; 
}, 100)


const BigMan2 = n.reduce(function (accumulator, currentValue, index, array) {
    console.log('I index: ' + index);
    console.log('I value: ' + currentValue); 
})


console.log(BigMan);
console.log(BigMan1);
console.log(BigMan2);
