import { expect } from "chai";

/**
 * Write a function which accepts a string and return a new string in reverse
 *
 * @param str accepts a String
 * @returns a reversed String
 */
function reverseString(str: string): string {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

expect(reverseString("mad")).to.equal("dam");
expect(reverseString("madam")).to.equal("madam");
expect(reverseString("mad dog")).to.equal("god dam");
expect(reverseString("")).to.equal("");
expect(reverseString("12345")).to.equal("54321");
