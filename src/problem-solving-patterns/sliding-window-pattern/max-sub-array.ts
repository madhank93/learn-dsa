/**
 * Write a function which accepts an integer array and a number called `num`
 * And it should calculate the max sum of `num` consecutive elements in the array
 *
 * @param arr integer array
 * @param num max sum of consecutive elements
 * @returns number
 */

import { expect } from "chai";

function maxSubArray(arr: number[], num: number): number {
  if (arr.length === 0 || num === 0) return 0;

  let max: number = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp = temp + arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

expect(maxSubArray([1, 2, 3, 4, 5, 6, 7], 3)).to.equal(18);
expect(maxSubArray([100, 2, 0, 114, 5, 20, 70], 3)).to.equal(139);
expect(maxSubArray([1, 2, 3, 4, 5, 6, 7], 1)).to.equal(7);
expect(maxSubArray([], 3)).to.equal(0);
expect(maxSubArray([1, 2, 3, 4], 0)).to.equal(0);
