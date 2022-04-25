import { expect } from "chai";

/**
 * Write a function that accepts an nested object and returns the
 * sum of all even numbers
 *
 * @param obj accepts nested object
 * @param sum defaults to zero
 * @returns sum of all even numbers
 */
function nestedEvenSum(obj: object, sum: number = 0): number {
  const map: Map<string, any> = new Map(Object.entries(obj));

  map.forEach((value) => {
    if (typeof value === "object") {
      sum += nestedEvenSum(value);
    } else if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    }
  });
  return sum;
}

expect(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  })
).to.equal(10);
expect(
  nestedEvenSum({
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  })
).to.equal(6);
expect(nestedEvenSum({})).to.equal(0);
