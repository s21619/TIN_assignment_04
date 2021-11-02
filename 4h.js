'use strict'

function secondLowestHighest(n_arr) {
    if (n_arr.length <= 2) {
        return -1;
    }
    else {
        n_arr.sort(function (a, b) {
            return a - b;
        });
        var result = [];
        result.push(n_arr[1], n_arr[n_arr.length - 2]);
        return result.join(',');
    }
}
var x = [1, 2];
var y = [4, 7, 6, 1, 5, 3, 2];
console.log(secondLowestHighest(x));
console.log(secondLowestHighest(y));