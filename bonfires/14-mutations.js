/*
* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
* For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.
* The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.
* Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.
*/

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
        return true;
    }

    return false;
}

module.exports = mutation;