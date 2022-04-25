import { expect } from "chai";

/**
 * Write a function which accepts an array and a target value,
 * and return the index at which target values exists. If not returns -1
 *
 * @param arr takes an numeric array
 * @param target element need to be found in the list
 * @returns if element found returns index or -1
 */
function linearSearch(arr: number[], target: number) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

expect(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100)).to.eql(-1);
expect(linearSearch([10, 15, 30, 45, 56, 2, 1], 15)).to.eql(1);
expect(linearSearch([200], 200)).to.eql(0);
expect(linearSearch([200], 100)).to.eql(-1);
expect(linearSearch([10, 15, 30, 45, 56, 2, 1], 1)).to.eql(6);
