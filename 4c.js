'use strict'

function palindrome(str) {
    var regexp = /[^A-Za-z0–9]/g;
    var lowRegStr = str.toLowerCase().replace(regexp, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
var x = ("racecar");
var y = ("hello world")
console.log(palindrome(x));
console.log(palindrome(y));