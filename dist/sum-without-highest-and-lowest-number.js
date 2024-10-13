"use strict";
function sumWithoutTheHeighestAndLowestNumber(arr) {
    if (!arr)
        return 0;
    return arr
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, current) => acc + current, 0);
}
console.log(sumWithoutTheHeighestAndLowestNumber([1, 2, 3, 4, 5])); // Output: 9
console.log(sumWithoutTheHeighestAndLowestNumber([5, 3, 2, 1, 4])); // Output: 9
