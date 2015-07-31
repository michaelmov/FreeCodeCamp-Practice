function where(arr, num) {
    for(var i = 0; i < arr.length; i++) {
        if(num > arr[i] && num < arr[i + 1]) {
            console.log(arr.indexOf(arr[i + 1]));
            return arr.indexOf(arr[i + 1]);
        }
        else if(num == arr[i]) {
            console.log(arr.indexOf(arr[i]));
            return arr.indexOf(arr[i]);

        }

    }
}

where([10, 20, 30, 40, 50], 30);
