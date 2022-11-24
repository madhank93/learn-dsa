/**
Given an array of integers number and an integer target, return indices of the two numbers such 
that they add up to target. You may assume that each input would have exactly one solution, and 
you may not use the same element twice. You can return the answer in any order.

Example 1:
Input: number = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because number[0] + number[1] == 9, we return [0, 1].

Example 2:
Input: number = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: number = [3,3], target = 6
Output: [0,1]

 */

function twoSumBruteForce(numArray: number[], target: number) {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[i] + numArray[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Two sum brute force test cases', () => {
    expect(twoSumBruteForce([2, 7, 11, 15], 9)).to.eql([0, 1]);
    expect(twoSumBruteForce([3, 2, 4], 6)).to.eql([1, 2]);
    expect(twoSumBruteForce([3, 3], 6)).to.eql([0, 1]);
    expect(twoSumBruteForce([3, 3, 3, 4], 60)).to.eql([]);
  });
}

function twoSumUsingMap(numArray: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < numArray.length; i++) {
    const subtractedValue = target - numArray[i];
    if (map.has(subtractedValue)) {
      return [map.get(subtractedValue), i];
    }
    map.set(numArray[i], i);
  }
  return [];
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Two sum using map test cases', () => {
    expect(twoSumUsingMap([2, 7, 11, 15], 9)).to.eql([0, 1]);
    expect(twoSumUsingMap([3, 2, 4], 6)).to.eql([1, 2]);
    expect(twoSumUsingMap([3, 3], 6)).to.eql([0, 1]);
    expect(twoSumUsingMap([3, 3, 3, 4], 60)).to.eql([]);
  });
}
