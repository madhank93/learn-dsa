import { expect } from "chai";

/**
 * Write a function which accepts an integer array and a number called `num`
 * And it should calculate the max sum of `num` consecutive elements in the array
 *
 * @param arr integer array
 * @param num max sum of consecutive elements
 * @returns number
 */
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
expect(maxSubArray([1, 2, 3, 4, 5, -6, 7], 2)).to.equal(9);
expect(maxSubArray([], 3)).to.equal(0);
expect(maxSubArray([1, 2, 3, 4], 0)).to.equal(0);

function maxSubArrayOptimized(arr: number[], num: number): number {
  let maxSum: number = 0;
  let tmpSum: number = 0;

  if (arr.length === 0 || num === 0 || arr.length < num) return 0;

  for (let i: number = 0; i < num; i++) {
    maxSum = maxSum + arr[i];
  }

  tmpSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tmpSum = tmpSum - arr[i - num] + arr[i];
    if (tmpSum > maxSum) {
      maxSum = tmpSum;
    }
  }
  return maxSum;
}

expect(maxSubArrayOptimized([1, 2, 3, 4, 5, 6, 7], 3)).to.equal(18);
expect(maxSubArrayOptimized([-1, -2, -3, -4], 2)).to.equal(-3);
expect(maxSubArrayOptimized([100, 2, 0, 114, 5, 20, 70], 3)).to.equal(139);
expect(maxSubArrayOptimized([1, 2, 3, 4, 5, 6, 7], 1)).to.equal(7);
expect(maxSubArrayOptimized([1, 2, 3, 4, 5, -6, 7], 2)).to.equal(9);
expect(maxSubArrayOptimized([], 3)).to.equal(0);
expect(maxSubArrayOptimized([1, 2, 3, 4], 0)).to.equal(0);
expect(maxSubArrayOptimized([1, 2, 3], 3)).to.equal(6);
expect(maxSubArrayOptimized([2, 3], 3)).to.equal(0);
