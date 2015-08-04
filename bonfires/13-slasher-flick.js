/*
* Return the remaining elements of an array after chopping off n elements from the head.
*/

function slasher(arr, howMany) {
    // Remove element from beginning of array and save what's remaining to remainingArray.
    var remainingArray = arr.slice(howMany);

    return remainingArray;
}

module.exports = slasher;
