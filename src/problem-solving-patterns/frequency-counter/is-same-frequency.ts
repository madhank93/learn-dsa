import { assert } from "chai";

/**
 * A function which takes two positive integers,
 * find out the two numbers have the same frequency of digits
 *
 * @param num1 positive integers
 * @param num2 positive integers
 */
function isSameFrequency(num1: number, num2: number) {
  let occurrence1: Record<number, number> = {};
  let occurrence2: Record<number, number> = {};

  if (num1.toString().length != num2.toString().length) return false;

  for (let element of num1.toString()) {
    occurrence1[parseInt(element)] = (occurrence1[parseInt(element)] || 0) + 1;
  }

  for (let element of num2.toString()) {
    occurrence2[parseInt(element)] = (occurrence2[parseInt(element)] || 0) + 1;
  }

  for (let key in occurrence1) {
    if (!(key in occurrence2)) return false;
    if (occurrence1[key] !== occurrence2[key]) return false;
  }
  return true;
}

assert.isTrue(isSameFrequency(182, 281));
assert.isFalse(isSameFrequency(34, 14));
assert.isTrue(isSameFrequency(3589578, 5879385));
assert.isFalse(isSameFrequency(22, 222));
