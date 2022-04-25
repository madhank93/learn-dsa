import { expect } from "chai";

/**
 * Write a function that takes a value and target
 * find the number of occurrences of target string present in the given string
 *
 * @param value takes a string
 * @param target takes a string
 * @returns return number of matches
 */
function naiveStringSearch(value: string, target: string): number {
  let counter = 0;
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== value[i + j]) break;
      if (j === target.length - 1) counter++;
    }
  }
  return counter++;
}

expect(naiveStringSearch("banana", "na")).to.eql(2);
expect(naiveStringSearch("lorie lolloped", "lol")).to.eql(1);
expect(naiveStringSearch("lorie lolloped", "lo")).to.eql(3);
expect(naiveStringSearch("match", "null")).to.eql(0);
