function slasher(arr, howMany) {
    // Remove element from beginning of array and save what's remaining to remainingArray.
    var remainingArray = arr.slice(howMany);

    console.log(remainingArray);
    
    return remainingArray;


}

slasher([1, 2, 3], 2);
