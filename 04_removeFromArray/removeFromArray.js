const removeFromArray = function(arr, num1, ...num2){
	for (let i=1; i<=arguments.length; i++) {
		if (arr.includes(arguments[i])) {
			let index = arr.indexOf(arguments[i])
			arr.splice(index,1);
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;