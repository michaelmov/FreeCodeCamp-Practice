/*
* Repeat a given string (first argument) n times (second argument).
*
* Return an empty string if n is a negative number.
*/

function repeat(str, num) {
	// Initialize a temp and the final repeated string.
	var repeatArray = []
	var repeatedString = "";

	// Add string to the temp array "num" times.
	if (num >= 0) {
		for (var i = 0; i < num; i++) {

		repeatArray.push(str);

		}

		// Convert temp array to a single string.
		repeatedString = repeatArray.join("");

	}

	return repeatedString;
}

module.exports = repeat;


