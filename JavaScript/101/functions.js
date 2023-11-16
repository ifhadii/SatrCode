// function to print statment
function printMessage() {
  return;
}

printMessage();

// function with for loop
function Numbers(To) {
  for (let i = 1; i <= To; i++) {
    console.log(i);
  }
  //   return;
}

Numbers(5);

// function with more than one param
function add(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

add(1, 10);
add(3, 5);
add("Welcome to ", "JavaScript");

// function with more than one param with return
function add1(firstNumber, secondNumber) {
  let resualt = firstNumber + secondNumber;
  return resualt;
}

let value = add1(1, 1);
console.log(value);

// function with more than one param with return
function add12(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let value1 = add12(1, 1) - add12(10, 11);
console.log(value1);

// function call inside another one !!
printMessage(add(1, 10));
printMessage(5);

const square = function (number) {
  console.log(number * number);
};
square(2);

// function myFunc(number) {
//   console.log(number * number);
//   return number;
// }
// myFunc(2);

// function myFunc(number) {
//   console.log(`${number} x ${number} = ` + number * number);
//   return number * number;
// }
// myFunc(2);

// function printYourName(name) {
//   return "Your name is " + name;
// }
// let functionOutput = printYourName("Reem");
// console.log(functionOutput);
