function chunk(arr, size) {
	// Let's initialize some arrays
  	var chunkyArray = [];
	var remainingArray = arr;

	// While the size of the chunk is less than what remains of sliced array...
  	while (size < remainingArray.length) {

		// Temporary group array to store the chunk in before pushing it to chunkyArray
		var group = [];

		// Loop through the array and and push chunk into chunkyArray
  		for (var j = 0; j < size; j++) {
  			group.push(remainingArray[j]);
  		}

		chunkyArray.push(group);

		// Remove already pushed chunk form the remaining array
		remainingArray = remainingArray.slice(size);

	}

	// Push the remaining chunk into chunkyArray
	chunkyArray.push(remainingArray);

	return chunkyArray;

}

module.exports = chunk;
