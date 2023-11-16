const colors = ['red', 'blue', 'gree'];


const isContainRed1 = colors.includes('red', 0);
const isContainRed2 = colors.includes('red', 1);
const isContainRed3 = colors.includes('red', -1);
const isContainRed4 = colors.includes('red', -2);

console.log(isContainRed1);
console.log(isContainRed2);
console.log(isContainRed3);
console.log(isContainRed4);