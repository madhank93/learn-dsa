import { expect } from "chai";

/**
 * Write a function that takes an array of strings,
 * capitalize the first letter of each string in the array
 *
 * @param array non-empty string of arrays
 * @returns array with capitalized first word
 */
function capitalizeFirst(array: string[]): string[] {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].slice(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].slice(1);
  res.push(string);
  return res;
}

expect(capitalizeFirst(["dog", "tom", "ram", "man"])).to.eql([
  "Dog",
  "Tom",
  "Ram",
  "Man",
]);
