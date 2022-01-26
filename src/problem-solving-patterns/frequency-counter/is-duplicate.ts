import { assert } from "chai";

function areThereDuplicates(...args: number[] | string[]): boolean | null {
  const occurrence: Record<string, number> = {};

  if (args.length === 0) return null;

  for (let value of args) {
    occurrence[value] = (occurrence[value] || 0) + 1;
  }

  for (let key in occurrence) {
    if (occurrence[key] > 1) return true;
  }

  return false;
}

assert.isFalse(areThereDuplicates("a", "b", "c"));
assert.isTrue(areThereDuplicates("a", "b", "b"));
assert.isTrue(areThereDuplicates("a", "b", "b", "c", "c"));
assert.isFalse(areThereDuplicates(1, 2, 3));
assert.isFalse(areThereDuplicates("a"));
assert.isFalse(areThereDuplicates(1));
assert.isNull(areThereDuplicates());
