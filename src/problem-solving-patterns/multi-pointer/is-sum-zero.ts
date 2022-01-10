/**
 * Write a program that takes a sorted array of integers.
 * And it should find the pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair not exists
 */

import { expect } from "chai";

function isSumOfTwoValuesZero(arr: number[]): number[] | undefined {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

expect(isSumOfTwoValuesZero([-2, 0, 3, 2])).to.eql([-2, 2]);
expect(isSumOfTwoValuesZero([-2, 4, -4, 2])).to.eql([-2, 2]);
expect(isSumOfTwoValuesZero([-4, 4, -4, 2].sort())).to.eql([-4, 4]);
expect(isSumOfTwoValuesZero([-1, 0, 0, 2])).to.eql([0, 0]);
isSumOfTwoValuesZero([-2, 0, 21])?.should.be.undefined;
isSumOfTwoValuesZero([4])?.should.be.undefined;
isSumOfTwoValuesZero([0])?.should.be.undefined;
