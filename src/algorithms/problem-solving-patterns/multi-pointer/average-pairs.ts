import { assert } from "chai";

/**
 * Write a function that takes sorted arrays of integers and a target average
 * check if there is a pair of values in the array that matches the target average
 *
 * @param arr sorted integer array
 * @param average target average value
 */
function findAveragePairs(arr: number[], targetAverage: number) {
  let leftPointer = 0;
  let rightPointer: number = arr.length - 1;

  if (arr.length === 0) return false;

  while (leftPointer < rightPointer) {
    const avg: number = arr[leftPointer] + arr[rightPointer] / 2;

    if (avg === targetAverage) {
      return true;
    } else if (avg < targetAverage) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return false;
}

assert.isTrue(findAveragePairs([1, 2, 3], 2.5));
assert.isTrue(findAveragePairs([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
assert.isFalse(findAveragePairs([-1, 0, 3, 4, 5, 6], 4.1));
assert.isFalse(findAveragePairs([], 4));
