function doubleCar(str: string): string {
  return str
    .split("")
    .map((char) => char.repeat(2))
    .join("");
}

console.log(doubleCar("abc")); // Output: "aabbcc"
console.log(doubleCar("Hello")); // Output: "HHeelllllloo"