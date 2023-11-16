
function operation(firstNumber, secondNumber, opCallback) {
    return `[${opCallback(firstNumber, secondNumber)}]`
}

console.log(operation(4, 2, function (firstNumber, secondNumber){
    return firstNumber + secondNumber;
}))


const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
console.log(operation(5, 2, sum));
console.log(operation(500, 2, sum));


console.log(operation(5, 2, (firstNumber, secondNumber) => firstNumber + secondNumber));


// console.log(operation(1, 2, sum));
// console.log(operation(10, 2, sub));
// console.log(operation(10, 2, mul));
