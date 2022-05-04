import { expect } from "chai";

function maxSubArrayBruteForce(arr: number[]) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    max = Math.max(temp, max);
    for (let j = i + 1; j < arr.length; j++) {
      temp += arr[j];
      max = Math.max(temp, max);
    }
  }
  return max;
}

expect(maxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.eql(6);
expect(maxSubArrayBruteForce([1])).to.eql(1);
expect(maxSubArrayBruteForce([5, 4, -1, 7, 8])).to.eql(23);

function maxSubArray(arr: number[]) {
  let sum: number = 0;
  let max: number = -Infinity;

  arr.forEach((num: number) => {
    sum = Math.max(sum + num, num);

    max = Math.max(max, sum);
  });
  return max;
}

expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.eql(6);
expect(maxSubArray([1])).to.eql(1);
expect(maxSubArray([5, 4, -1, 7, 8])).to.eql(23);
