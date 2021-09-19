const reverseString = function(str) {
	let reversed = [];
	for (let i=0; i<str.length;i++) {
		reversed.push(str[i])
	}
	return reversed.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
