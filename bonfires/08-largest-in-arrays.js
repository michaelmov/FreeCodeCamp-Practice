function largestOfFour(arr) {
  // Initialize an empty array for storing largest numbers
  var largestNumbers = [];

  // Let's go through each subarray and get the largest numbar
  for (var i = 0; i < arr.length; i++) {

  	// By default, the first number of each array will be largest
  	var largest = arr[i][0];
  	for (var j = 1; j <= arr[i].length; j++) {

  		if (arr[i][j] > largest) {

  			largest = arr[i][j];
  		}
  	}

  	// Add largest number to array 
  	largestNumbers.push(largest);
  }

  return largestNumbers;
}

module.exports = largestOfFour;
