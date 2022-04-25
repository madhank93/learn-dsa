import { expect } from "chai";

/**
 * Write a function which accepts a number and adds up all the numbers passed to the function
 *
 * @param num number
 * @returns sum of all the number
 */
function recursiveRange(num: number): number {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

expect(recursiveRange(10)).to.equal(55);
expect(recursiveRange(6)).to.equal(21);
