function makeNegative(num: number): number {
  return num === 0 ? 0 : -Math.abs(num);
}

console.log(makeNegative(42)); // Output: -42
console.log(makeNegative(-9)); // Output: -9
console.log(makeNegative(0)); // Output: 0
console.log(makeNegative(1)); // Output: -1
