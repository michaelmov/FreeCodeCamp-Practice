/*
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.
 *
 * Note that the three dots at the end add to the string length.
 */

function truncate(str, num) {

	var truncatedString;

	// Check string length. If length is <= num, then simply return the string.
	if (str.length <= num) {

		return str;
	}

	// If length is > num, then remove extra characters and add "..."
	truncatedString = str.slice(0, num - 3).concat("...");

	return truncatedString;
}

module.exports = truncate;
