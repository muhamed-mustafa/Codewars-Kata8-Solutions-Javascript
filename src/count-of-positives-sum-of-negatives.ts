function countPositivesSumNegatives(input: number[]): number[] {
  return input.reduce(
    (acc, i) => {
      i > 0 ? acc[0]++ : i < 0 ? (acc[1] += i) : null;
      return acc;
    },
    [0, 0]
  );
}


console.log(countPositivesSumNegatives([1, -2, 3, -4, 5, -6])); // Output: [3, -12]