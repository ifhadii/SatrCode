const ages = [11, 12, 13, 42, 19, 20];


const adult = ages.some(function(element) {
	return element >= 18;
})

console.log(adult);

const ages_ = [11, 12, 13, 15, 16, 17];

const adult_ = ages_.some(function(element) {
	return element >= 18;
})

console.log(adult_);
