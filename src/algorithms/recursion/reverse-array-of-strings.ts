import { expect } from "chai";

/**
 * Write a function that accepts an array and returns it in reversed order
 *
 * @param arr accepts non-empty number or string array
 * @returns array with values reversed
 */
function reverseArrayOfStrings<T>(arr: T[]): T[] {
  if (arr.length === 1) return arr;
  const res: T[] = reverseArrayOfStrings(arr.slice(1));
  res.push(arr[0]);
  return res;
}

expect(reverseArrayOfStrings(["h", "e", "l", "l", "o"])).to.eql([
  "o",
  "l",
  "l",
  "e",
  "h",
]);
expect(reverseArrayOfStrings(["d", "o", "g"])).to.eql(["g", "o", "d"]);
expect(reverseArrayOfStrings([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
expect(reverseArrayOfStrings([1, 2])).to.eql([2, 1]);
