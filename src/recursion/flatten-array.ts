import { expect } from "chai";

type NestedArray<T> = Array<NestedArray<T> | T>;

function flattenArray<T>(arr: NestedArray<T>): T[] {
  var result: T[] = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i] as NestedArray<T>));
    } else {
      result.push(arr[i] as T);
    }
  }
  return result;
}

expect(flattenArray([1, 2, 3, [4, [5], 6]])).to.eql([1, 2, 3, 4, 5, 6]);
expect(flattenArray([1, 2, 3, 4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
expect(flattenArray(["a", "b", "c", ["d", [["e"]], "f"]])).to.eql([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
]);
expect(flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).to.eql([1, 2, 3]);