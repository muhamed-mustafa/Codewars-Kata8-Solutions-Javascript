function invertValues(array: number[]): number[] {
  return array.map((num) => -num);
}


console.log(invertValues([1, 2, 3, 4, 5])); // Output: [-1, -2, -3, -4, -5]
console.log(invertValues([1, -2, 3, -4, 5])); // Output: [-1, 2, -3, 4, -5]

