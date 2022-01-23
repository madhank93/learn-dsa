import { assert } from "chai";

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as
 * cinema , formed from iceman
 */
function isAnagram(str1: string, str2: string): boolean {
  let occurrence1: Record<string, number> = {};
  let occurrence2: Record<string, number> = {};

  if (str1.length != str2.length) return false;

  for (let element of str1) {
    occurrence1[element] = (occurrence1[element] || 0) + 1;
  }

  for (let element of str2) {
    occurrence2[element] = (occurrence2[element] || 0) + 1;
  }

  for (let key in occurrence1) {
    if (!(key in occurrence2)) {
      return false;
    }
    if (occurrence1[key] != occurrence2[key]) {
      return false;
    }
  }
  return true;
}

assert.isTrue(isAnagram("", ""));
assert.isTrue(isAnagram("anagram", "nagaram"));
assert.isTrue(isAnagram("qwerty", "qeywrt"));
assert.isFalse(isAnagram("aaz", "zza"));
assert.isFalse(isAnagram("rat", "car"));
