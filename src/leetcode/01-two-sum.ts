import { expect } from "chai";

function twoSumBruteForce(numArray: number[], target: number) {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[i] + numArray[j] === target) {
        return [i, j];
      }
    }
  }
}

expect(twoSumBruteForce([2, 7, 11, 15], 9)).to.eql([0, 1]);
expect(twoSumBruteForce([3, 2, 4], 6)).to.eql([1, 2]);
expect(twoSumBruteForce([3, 3], 6)).to.eql([0, 1]);

function twoSumUsingMap(numArray: number[], target: number) {
  let map = new Map<number, number>();
  for (let i = 0; i < numArray.length; i++) {
    let subtractedValue = target - numArray[i];
    if (map.has(subtractedValue)) {
      return [map.get(subtractedValue), i];
    }
    map.set(numArray[i], i);
  }
  return null;
}

expect(twoSumUsingMap([2, 7, 11, 15], 9)).to.eql([0, 1]);
expect(twoSumUsingMap([3, 2, 4], 6)).to.eql([1, 2]);
expect(twoSumUsingMap([3, 3], 6)).to.eql([0, 1]);
