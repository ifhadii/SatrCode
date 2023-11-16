let fruits = ["apple", "banana", "cherry"];

console.log("\n-------------");
console.log(fruits.pop());
console.log(fruits);
console.log("\n-------------");


console.log("\n-------------");

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accIncreasing, currentValue) => {
  return accIncreasing + currentValue;
}, 0);
console.log(sum);


console.log("\n-------------");

let num = [1, 2, 3, 4];
let nue = [5, 6, 7, 8];

console.log(num.concat(nue));

console.log("\n-------------");
let num1 = [1, 23, 4];
console.log(num1.unshift(12));
console.log(num1);

console.log("\n-------------");

let main = [1, 2, 3, 4, 5, 6, 6];
let mainCopy = main.slice(0, 3);
console.log(mainCopy);

console.log("\n-------------");


console.log("\n-------------");

let msplit = "Fahad a;lskdjf a;lskdjf a;sldkjf;aslkdjf alskdjf;aslkdjf";
let msplitCopy = msplit.split("#", 2);
console.log(msplitCopy);

console.log("\n-------------");

console.log("\n-------------");

let msh = [1, 2, 3, 4, 5, 6, 6];
console.log(msh.shift());
console.log(msh);

console.log("\n-------------");

console.log(Array.isArray(msh));

console.log("\n-------------");

let even = [2, 4, 6, 12];

const evens = even.filter(even => {
    return even % 2 === 0;
});
console.log(evens);

console.log("\n-------------");


console.log("\n-------------");

let numbers1 = [1, 3, 4, 5];

const nums = numbers1.map (num => {
  return num * 2;
});

console.log(nums);

console.log("\n-------------");

console.log("\n-------------");

let numbers12 = [1, 3, 4, 5];

numbers12.forEach(num => {

  if (num % 2 === 0) {
    console.log(`Even: ${num}`)
  } else {
    console.log(`odd: ${num}`)
  }
});

console.log(numbers12);

console.log("\n-------------");

let ara = [1, 2, 3, 4, 5];

const array2 = ara.map (num => {

  if (num % 2 === 0) 

    console.log(`even: ${num}`);
    
  else

    console.log(`odd: ${num}`);
    
});

console.log(ara);
// console.log(array2);

console.log("\n-------------");

