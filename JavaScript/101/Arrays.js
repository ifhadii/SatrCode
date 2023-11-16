// arrays in js

// this how to makee an empty array
let color = [];

// this how to makee an array
let colors = ["red", "green", "blue"];
//              0       1        2

console.log(colors);
console.log(colors[0]); // to print specific index

// this how to update the array
console.log(colors[1]);

colors[1] = "black";

console.log(colors[1]);

// how to know the length of the arrays?
console.log(colors.length);

// how to know is this "" specific item is in this array or no
// and returns boolean value
console.log(colors.includes("black"));

console.log(colors.includes("purble"));

// Use it with the var
let result = colors.includes("black");

console.log(result);

// how to add element into an array
colors.push("green");

console.log(colors);

// how to delete an element from array
colors.pop("green");

console.log(colors);

// Use pop function in variable to store that element in var
let colorGreen = colors.pop("blue");

console.log(colors);
console.log(colorGreen);

// how to add element use Unshift
colors.unshift("blue");
colors.unshift("green");
colors.unshift("black");

console.log(colors);

// how to delete element use shift
colors.shift();
colors.shift();

console.log(colors);

// how to store shift function in var
const blueColor = colors.shift();

console.log(colors);
console.log(blueColor);

// تستخدم isArray للتحقق من أن بيانات محددة هي من نوع array، وتكون قيمتها إما true أو false
let color1 = "black";

console.log(Array.isArray(colors));
console.log(Array.isArray(color));
