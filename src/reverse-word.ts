function reverseWord(word: string): string {
  return word.split(" ").reverse().join(" ");
}

console.log(reverseWord("Hello World")); // Output: World Hello
console.log(reverseWord("This is a test")); // Output: test a is This
