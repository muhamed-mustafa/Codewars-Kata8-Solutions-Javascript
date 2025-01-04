function litres(time: number): number {
  return Math.floor(time * 0.5);
}

console.log(litres(3)); // Output: 1
console.log(litres(6.7)); // Output: 3
console.log(litres(11.8)); // Output: 5