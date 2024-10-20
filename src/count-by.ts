function countBy(x: number, n: number): number[] {
  return Array.from({ length: n }, (_, i) => x * (i + 1));
}

console.log(countBy(1, 10)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(countBy(2, 5)); // Output: [2, 4, 6, 8, 10]
