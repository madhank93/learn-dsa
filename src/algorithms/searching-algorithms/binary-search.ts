import { expect } from "chai";

/**
 * Write a function which accepts a sorted array and a target value
 * And it returns the index at which value exists else return -1
 *
 * for more info - `https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search`
 *
 * @param arr sorted array
 * @param target value to be found in the given array
 * @returns index at which value exists; else returns -1
 */
function binarySearch(arr: number[], target: number): number {
  let start = 0;
  let end = arr.length - 1;
  let middleNumber = Math.floor((start + end) / 2);

  while (arr[middleNumber] !== target && start <= end) {
    if (arr[middleNumber] < target) start = middleNumber + 1;
    else end = middleNumber - 1;
    middleNumber = Math.floor((start + end) / 2);
  }

  return target === arr[middleNumber] ? middleNumber : -1;
}

expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2)).to.eq(1);
expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 20)).to.eq(-1);
expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 11)).to.eq(10);
expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).to.eq(4);
