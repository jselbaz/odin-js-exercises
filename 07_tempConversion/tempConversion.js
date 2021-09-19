const ftoc = function(fahr) {
	cels = (fahr - 32) * (5/9);
	cels = Math.round(cels * 10)/10;
	return cels;
};

const ctof = function(cels) {
	fahr = cels * (9/5) + 32;
	fahr = Math.round(fahr * 10)/10;
	return fahr;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
