const numbers = [11, 7, 9, 15];

const el = numbers.find(function(ele) {
	return ele % 3 === 0;
})
 
const ell = numbers.find(function(ele) {
	return ele % 4 === 0; // when not found return undifind not -1 
})

console.log(el); // return element 
console.log(ell); // return -1