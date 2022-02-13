import { assert } from "chai";

/**
 * Write a function which takes a string and return true if the string passed
 * to it is a palindrome.
 *
 * @param str accepts a String
 * @returns boolean
 */
function isPalindrome(str: string): boolean {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

assert.isTrue(isPalindrome("madam"));
assert.isTrue(isPalindrome("aa"));
assert.isFalse(isPalindrome("ab"));
assert.isTrue(isPalindrome("redder"));
assert.isTrue(isPalindrome("racecar"));
assert.isFalse(isPalindrome("banana"));
assert.isFalse(isPalindrome("renter"));
