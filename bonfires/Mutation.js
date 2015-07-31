function mutation(arr) {
    // A an array to store matching characters into.
    var matchingCharacters = [];

    // Iterate through each letter of string in 2nd element of array and compare to each
    // letter of string in first element
    for (var i = 0; i < arr[1].length; i++) {
        // If a letter is found in 1st element, then add it to matchingCharacters array.
        if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) > -1) {

            matchingCharacters.push(arr[1].toLowerCase().charAt(i));
        }
    }

    // If length of matchingCharacters is the same as the length 2nd element, then return true
    if (matchingCharacters.length === arr[1].length) {
        console.log('true');
        return true;
    }

    console.log('false');
    return false;
}

mutation(['hello', 'hey']);
