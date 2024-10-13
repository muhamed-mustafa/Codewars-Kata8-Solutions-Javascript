// function sumOfPositive(arr: number[]): number {
//   return arr
//     .filter((num) => num > 0)
//     .reduce((acc, current) => acc + current, 0);
// }

function sumOfPositive(arr: number[]): number {
  return arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
}

console.log(sumOfPositive([1, -2, 3, 4, -5])); // Output: 8
console.log(sumOfPositive([1, 2, 3, 4, 5])); // Output: 15
