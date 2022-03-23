import { expect } from "chai";

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
