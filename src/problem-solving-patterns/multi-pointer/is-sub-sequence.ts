import { assert } from "chai";

/**
 * Write a function which takes two strings and checks whether the
 * characters in first string forms a sequence of characters in second string
 *
 * @param str1 String argument one
 * @param str2 String argument two
 */
function isSubsequence(str1: string, str2: string) {
  let firstCounter: number = 0;
  let secondCounter: number = 0;

  if (!str1) return true;

  while (secondCounter < str2.length) {
    if (str2[secondCounter] === str1[firstCounter]) firstCounter++;
    if (firstCounter === str1.length) return true;
    secondCounter++;
  }

  return false;
}

assert.isTrue(isSubsequence("sing", "sting"));
assert.isTrue(isSubsequence("hello", "hello world"));
assert.isTrue(isSubsequence("abc", "abracadabra"));
assert.isFalse(isSubsequence("abc", "acb"));
