"use strict";
function digitize(n) {
    return n.toString().split("").map(Number).reverse();
}
console.log(digitize(348597)); // Output: [7, 9, 5, 8, 4, 3]
console.log(digitize(35231)); // Output: [1, 3, 2, 5, 3]
