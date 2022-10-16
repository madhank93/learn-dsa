import { assert } from "chai";

/**
 * Write a function which takes multiple number of arguments
 * check whether there are any duplicates among the arguments passed in.
 *
 * @param args multiple arguments of `number` or `strings`
 * @returns boolean or null
 */
function areThereDuplicates(...args: number[] | string[]) {
  const pointer1 = 0;
  const pointer2 = 1;

  if (args.length === 0) return null;

  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] == args[i + 1]) return true;
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
