function noSpace(str: string): string {
  return str.replace(/\s/g, "");
}

console.log(noSpace("Hello World")); // Output: "HelloWorld"
console.log(noSpace("H E L L O W O R L D")); // Output: "HELLOWORLD"
