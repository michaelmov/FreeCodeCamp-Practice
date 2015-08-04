/*
* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
* Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
    // Extract the arguments
    var args = Array.prototype.slice.apply(arguments).slice(1, arguments.length);

    // Iterate through array and remove the specified argument values
    for (var i in arr) {
        for (var x in args) {
            if (arr[i] === args[x]) arr.splice(i, 1);
        }
    }
    return arr;
}

module.exports = destroyer;