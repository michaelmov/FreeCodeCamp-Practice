function end(str, target) {

	// Let's remove all punctuation from the string and split it into an array.
	var rawString = str.replace(/[,.";:'!?+-]/g, '')
						.toLowerCase()
						.split(/\s/g);

	// If the string is only a single word, then we compare the last letter of the word
	// to the target
	if (rawString.length == 1) {
		if (rawString[0].substr(rawString[0].length - 1) == target) {

		return true;
	}

	// Otherwise, we compare the last word of the string to target
	} else if (rawString.length > 1){

		if (rawString[rawString.length - 1] == target) {

			return true;
		}
	}

  	return false;
  	
}

module.exports = end;
