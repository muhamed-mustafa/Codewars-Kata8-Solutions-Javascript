function repeatString(count: number, str: string): string {
  return str.repeat(count);
}

console.log(repeatString(5, "Hello")); // Output: "HelloHelloHelloHelloHello"
console.log(repeatString(3, "abc")); // Output: "abcabcabc"
