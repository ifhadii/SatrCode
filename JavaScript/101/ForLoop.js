// how to make for loop in javaScript.

// for (let i = 5; i > 0; i--) {
//   console.log(`Decrement ${i}`);
// }

// ----------------------------------

// how to make while loop in javaScript.

// let number = 5;

// while (number > 0) {
//   console.log(`Decrement: ${number}`);
//   number--;
// }

// ----------------------------------

// continue

// for (let index = 1; index <= 10; index++) {
//   if (index % 2 == 0) {
//     console.log("Next");
//     continue;
//   }
//   console.log(index);
// }

// ------------------------------------

// break

// for (let index = 1; index <= 10; index++) {
//   if (index % 2 == 0) {
//     console.log("Stop");
//     break;
//   }
//   console.log(index);
// }

// ------------------------------------------

// for with array

// const colors = ["red", "blue", "green"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(`The Color: ${colors[i]}`);
// }

// ------------------------------------------

// for of

// const colors = ["red", "blue", "green"];

// for (let color of colors) {
//   console.log(color);
// }

// ---------------------------------------

// for with string

// const text = "Welcome To JavaScript.";

// for (let char of text) {
//   console.log(char);
// }

// -----------------------------
// while

const colors = ["red", "green", "blue"];

// let i = 0;

// while (i < colors.length) {
//   console.log(colors[i]);
//   i++;
// }

// ----------------------------

// do while

// do {
//   console.log(colors[i]);
//   i++;
// } while (i < colors.length);

// ---------------------------------------
// another do while

// const text = "Welcome To JavaScript";
// let i = 0;

// do {
//   console.log(text[i]);
//   i++;
// } while (i < text.length);
// console.log("***");

// -----------------------------------------

// break

// const numbers = [1, 2, 3, 0, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == 0) {
//     continue;
//   }
//   console.log(numbers[i]);
// }
// console.log("****");

let number = 1;
let str = "";
while (number < 6) {
  console.log(number);
  str += number;
}
