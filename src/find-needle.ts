function findNeedle(haystack: string[]): string {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "needle", "hay", "junk"])); // Output: "found the needle at position 4"
