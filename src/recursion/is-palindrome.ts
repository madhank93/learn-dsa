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
