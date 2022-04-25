import { expect } from "chai";

/**
 * Write a function which takes in an array of numbers and returns the product of them all
 *
 * @param arr integer array
 * @returns number
 */
function productOfArray(arr: number[]): number {
  if (arr.length === 0) return 0;
  else if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

expect(productOfArray([1, 2, 3])).to.equal(6);
expect(productOfArray([1, 2, 3, 10])).to.equal(60);
expect(productOfArray([1, 2, 0])).to.equal(0);
expect(productOfArray([5])).to.equal(5);
expect(productOfArray([])).to.equal(0);
