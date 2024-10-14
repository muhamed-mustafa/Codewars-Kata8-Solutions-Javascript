function countSheep(arrayOfSheep: boolean[]): number {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheep([true, true, true, false, true])); // Output: 4
console.log(countSheep([false, false, true])); // Output: 1
console.log(countSheep([])); // Output: 0
