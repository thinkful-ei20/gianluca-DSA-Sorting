

const getMaxProfit = (shares) => {

	/**
	 * [123, 109, 120, 201, 80, 150, 200];
	 */

	let smallestShare = 0;
	let largestShare = 1;

	let currentMinimum = 0;

	/**
	 * i = 1
	 * smallest 109
	 * largest 109
	 * currMin 109
	 *
	 * i = 2
	 * smallest 109
	 * largest 120
	 * currMin 109
	 *
	 * i = 3
	 * smallest 109
	 * largest 201
	 * currMin 109
	 */

	for(let i = 1; i < shares.length; i++) {

		if(shares[currentMinimum] > shares[i]) {
			currentMinimum = i;
		}

		let currentMaxProfit = shares[largestShare] - shares[smallestShare];

		if(shares[i] - shares[currentMinimum] > currentMaxProfit) {

			largestShare = i ;
			smallestShare = currentMinimum;

		}
	}

	return shares[largestShare] - shares[smallestShare];

};

const input = [123, 109, 120, 201, 80, 150, 200];

console.log(getMaxProfit(input));

/**
 * 	Array.prototype.reduce Poly-Fill
 *	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * 	array.reduce( callback[, initialValue] );
 *
 *
 *	input array
 * 	output = single value
 *
 * 	const arr = [1,2,3,4];
 * 	arr.reduce(function(accum, el){ accum + el })
 */

Array.prototype.reducePolyfill = function( callback, initialValue = null) {
	var accumulator;
	if(initialValue) {
		accumulator = initialValue;
	}

	for( var i = 0; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this);
	}

	return accumulator;
};
