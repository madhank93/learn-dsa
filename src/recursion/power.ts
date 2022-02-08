import { expect } from "chai";

/**
 * Write a function which accepts a base and exponent. And it should return the power of the base
 * to the exponent.
 *
 * @param base non-negative number
 * @param exponent non-negative number
 * @returns number
 */
function power(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

expect(power(2, 0)).to.equal(1);
expect(power(2, 2)).to.equal(4);
expect(power(2, 4)).to.equal(16);
