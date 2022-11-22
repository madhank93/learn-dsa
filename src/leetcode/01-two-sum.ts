/**
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

  Sample Input:
  array  = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum  = 10

  Sample Output:
  [-1, 11]
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
