/**`
 * Problem Statement - Compare elements in arr1 is square of arr2, return true if matches (where order doesn't matter)
 * ex:
 * arr1 = [1, 2, 3] ; arr2 = [1, 4, 9] => true
 * arr1 = [1, 2, 3] ; arr2 = [9, 4, 1] => true
 * arr1 = [1, 2, 2] ; arr2 = [4, 1, 4] => true
 * arr1 = [1, 2] ; arr2 = [9, 4, 1] => false
 * arr1 = [1, 2, 3] ; arr2 = [4, 5, 6] => false
 */

import { assert } from "chai";

/**
 * Naive solution with complexity of o^2, since nested loop (for and indexOf)
 * @param arr1 array
 * @param arr2 array
 * @returns boolean
 */
function isSameSquare(arr1: number[], arr2: number[]): boolean {
  if (arr1.length != arr2.length) return false;

  for (let charValue of arr1) {
    let correctIndex = arr2.indexOf(charValue * charValue);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }

  return true;
}

assert.isTrue(isSameSquare([1, 2, 3], [1, 4, 9]));
assert.isTrue(isSameSquare([1, 2, 3], [9, 4, 1]));
assert.isTrue(isSameSquare([1, 2, 2], [4, 1, 4]));
assert.isTrue(isSameSquare([1, 2, 2, 4, 5, 2], [4, 1, 4, 25, 4, 16]));
assert.isFalse(isSameSquare([1, 2], [9, 4, 1]));
assert.isFalse(isSameSquare([1, 2, 3], [4, 5, 6]));

/**
 * Optimized solution with complexity of o(n)
 * @param arr1 array
 * @param arr2 array
 * @returns boolean
 */
function isSameSquareOptimized(arr1: number[], arr2: number[]) {
  if (arr1.length != arr2.length) return false;
  let frequencyCounter1: Record<string, number> = {};
  let frequencyCounter2: Record<string, number> = {};
  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }
  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(parseInt(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[parseInt(key) ** 2] != frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

assert.isTrue(isSameSquareOptimized([1, 2, 3], [1, 4, 9]));
assert.isTrue(isSameSquareOptimized([1, 2, 3], [9, 4, 1]));
assert.isTrue(isSameSquareOptimized([1, 2, 2], [4, 1, 4]));
assert.isTrue(isSameSquareOptimized([1, 2, 2, 4, 5, 2], [4, 1, 4, 25, 4, 16]));
assert.isFalse(isSameSquareOptimized([1, 2], [9, 4, 1]));
assert.isFalse(isSameSquareOptimized([1, 2, 3], [4, 5, 6]));
