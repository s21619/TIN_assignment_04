'use strict'

function binarySearch(array, key) {
    array.sort(function (a, b) {
        return a - b;
    });
    var low = 0
    var high = array.length - 1

    while (low <= high) {
        var middle = Math.floor((low + high) / 2)
        var current = array[middle]

        if (current === key) {
            return middle
        }

        if (current > key) {
            high = middle - 1
        } else {
            low = middle + 1
        }
    }

    return null;
}
var x = [5, 7, 1, 3, 8, 2];
console.log(binarySearch(x, 7));
console.log(binarySearch(x, 3));
