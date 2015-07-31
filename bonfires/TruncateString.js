function truncate(str, num) {

	var truncatedString;

	// Check string length. If length is <= num, then simply return the string.
	if (str.length <= num) {

		console.log (str);
		return str;
	}

	// If length is > num, then remove extra characters and add "..."
	truncatedString = str.slice(0, num - 3).concat("...");

	console.log(truncatedString);
	return truncatedString;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);