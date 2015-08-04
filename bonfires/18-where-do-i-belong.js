/*
* Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
*
* For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).
*/

function where(arr, num) {

    for(var i = 0; i < arr.length; i++) {

        if(num > arr[i] && num < arr[i + 1]) {

            return arr.indexOf(arr[i + 1]);
        }
        else if(num == arr[i]) {

            return arr.indexOf(arr[i]);

        }
    }
}

module.exports = where;