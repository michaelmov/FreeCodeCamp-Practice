/*
* Return a new array that transforms the element's average altitude into their orbital periods.
*
* The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
*
* You can read about orbital periods on Wikipedia.
*
* The values should be rounded to the nearest whole number. The body being orbited is Earth.
*
* The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418
*
*/
function orbitalPeriod(arr) {

    // Constants
    var GM = 398600.4418,
        earthRadius = 6367.4447,
        avgAlt;
    // Loop through array
    for (var i = 0; i < arr.length; i++) {

            avgAlt = arr[i]['avgAlt'];

            // Calculate orbital period and add the key and value to the array object
            arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.pow(Math.pow(earthRadius + avgAlt, 3)/GM , 0.5));

            // remove avgAlt property
            delete arr[i].avgAlt;
    }
    return arr;
}

module.exports = orbitalPeriod;