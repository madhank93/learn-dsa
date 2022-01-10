/**
 * Write a function accepts a sorted array, and counts the unique values in the array
 * There can be a negative numbers in the array but it will be always sorted
 *
 * @param arr sorted integer array
 * @returns number
 */

import { expect } from "chai";

function uniqueValueCount(arr: number[]) {
  let i = 0;

  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
}

expect(uniqueValueCount([])).to.equal(0);
expect(uniqueValueCount([1, 1, 1, 1, 2, 3, 3, 4])).to.equal(4);
expect(uniqueValueCount([-1, 1, 1, 1, 1, 1, 1, 2])).to.equal(3);
expect(uniqueValueCount([1, 1, 1, 1, 1, 1])).to.equal(1);
