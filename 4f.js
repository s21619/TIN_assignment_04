'use strict'

function isPrime(n) {
    for (var i = 2; i < n; i++)
        if (n % i === 0) return false;
    return n > 1;
}
var x = 6;
var y = 7;
console.log(isPrime(x));
console.log(isPrime(y));