function findOdd(xs: number[]): number {
  return xs.reduce((a, b) => a ^ b);
}

console.log(findOdd([0, 1, 0, 1, 0])); // Output: 0
console.log(findOdd([1, 1, 3])); // Output: 3
