'use strict'

function longestWordChecker(str) {
    var longestWord = str.split(' ').sort(function (a, b) {
        return b.length - a.length;
    }
    );
    return longestWord[0];
}
var x = ("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
console.log(x);
console.log(longestWordChecker(x));