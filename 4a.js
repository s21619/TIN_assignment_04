'use strict';

function fact(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}
var x = 1;
console.log(fact(x));