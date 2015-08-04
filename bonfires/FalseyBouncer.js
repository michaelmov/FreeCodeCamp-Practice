// Return only non-falsey values
function removeFalsey(value) {
    if (value !== false) {
        return value;
    }
}

function bouncer(arr) {
    // Filter all values in array and add non-falsey values to var filtered
    var filtered = arr.filter(removeFalsey);
    console.log(filtered);
    return filtered;
}

bouncer([7, 'ate', '', false, 9]);