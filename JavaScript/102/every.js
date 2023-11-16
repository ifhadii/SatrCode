const ag = [21, 23, 27, 25, 22, 11];

const adult = ag.every(function(element, index, array) {
	return element >= 18;
})

console.log(adult);