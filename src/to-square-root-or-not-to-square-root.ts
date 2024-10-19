function squareOrSquareRoot(array: number[]): number[] {
  return array.map((num) =>
    Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num ** 2
  );
}

console.log(squareOrSquareRoot([4, 3, 9])); // Output: [2, 9, 3]
console.log(squareOrSquareRoot([16, 25, 36])); // Output: [ 4, 5, 6 ]
console.log(squareOrSquareRoot([1, 2, 3, 4, 5])); // Output: [ 1, 4, 9, 2, 25 ]
