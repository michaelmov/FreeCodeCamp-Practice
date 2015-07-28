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
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
