// index      0   1   2   3
const ages = [11, 14, 19, 21];

const index = ages.findIndex(function(element) {
	// body...
	return element >= 25;

})
console.log(index);