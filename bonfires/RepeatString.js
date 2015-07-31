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
		

		console.log(repeatedString);
	  	return repeatedString;
	}

	repeat('abc', 3);
