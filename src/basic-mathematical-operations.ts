function basicOperation(
  operation: string,
  value1: number,
  value2: number
): number {
  return eval(`${value1} ${operation} ${value2}`);
}

console.log(basicOperation("*", 5, 3)); // Output: 15
console.log(basicOperation("/", 5, 3)); // Output: 1.6666666666666667
console.log(basicOperation("+", 5, 3)); // Output: 8
console.log(basicOperation("-", 5, 3)); // Output: 2
