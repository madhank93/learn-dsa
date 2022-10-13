import { describe, expect, it } from "vitest";
import CustomArray from "./custom-array";

describe("Custom array tests", () => {
  it("#push, Add elements to an array", () => {
    let arr = new CustomArray();

    arr.push("val 1");
    arr.push("2");
    arr.push("val 3");
    let length = arr.push("val 4");

    expect(length).to.be.equal(4);
  });

  it("#get, Verify able to retrieve the elements from an array based an index", () => {
    let arr = new CustomArray();

    arr.push("val 1");
    arr.push("2");
    arr.push("val 3");
    arr.push(4);

    expect(arr.get(0)).to.be.equal("val 1");
    expect(arr.get(3)).to.be.equal(4);
  });

  it("#getLength, Verify the length of an array", () => {
    let arr = new CustomArray();

    const initialLength = arr.getLength();
    arr.push("val 1");
    arr.push("2");
    const finalLength = arr.getLength();

    expect(initialLength).to.be.equal(0);
    expect(finalLength).to.be.equal(2);
  });

  it("#get, Verify it throws an error when index is out of bound", () => {
    let arr = new CustomArray();

    arr.push("val 1");
    arr.push("2");

    expect(() => arr.get(-1)).to.toThrowError("Array index out of bound");
    expect(() => arr.get(10)).to.toThrowError("Array index out of bound");
  });

  it("#pop, Verify last element from an array is removed", () => {
    let arr = new CustomArray();
    arr.push(1);
    arr.push(2);
    arr.push(3);

    arr.pop();

    expect(() => arr.get(2)).to.toThrowError("Array index out of bound");
  });

  it("#pop, Verify last element from an array is returned on pop", () => {
    let arr = new CustomArray();
    arr.push(1);
    arr.push(2);
    arr.push(3);

    expect(arr.pop()).to.be.equal(3);
    expect(arr.pop()).to.be.equal(2);
  });

  it("#pop, Verify after removing last element; length of an array is reduced", () => {
    let arr = new CustomArray();
    arr.push(1);
    arr.push(2);
    arr.push(3);

    arr.pop();
    let lengthAfterPop = arr.getLength();

    expect(lengthAfterPop).to.be.equal(2);
  });

  it("#pop, Verify pop action throws an error when array size is less than zero or empty", () => {
    let arr = new CustomArray();
    arr.push(1);
    arr.pop();

    let emptyArr = new CustomArray();

    expect(() => arr.pop()).to.toThrowError(
      "Array is empty cannot perform pop() action"
    );
    expect(() => emptyArr.pop()).to.toThrowError(
      "Array is empty cannot perform pop() action"
    );
  });

  it("#insert, Verify able to insert an element in the array", () => {
    let arr = new CustomArray();
    arr.push(1);
    arr.push(2);
    arr.push(5);
    arr.insert(2, 3);

    expect(arr.get(2)).to.be.equal(3);
    expect(arr.getLength()).to.be.equal(4);
  });

  it("#insert, Verify elements are shifted to right after insertion and array remains intact", () => {
    let arr = new CustomArray();
    arr.push(1);
    arr.push(2);
    arr.push(4);
    arr.insert(2, 3);

    expect(arr.get(0)).to.be.equal(1);
    expect(arr.get(1)).to.be.equal(2);
    expect(arr.get(2)).to.be.equal(3);
    expect(arr.get(3)).to.be.equal(4);
    expect(() => arr.get(4)).to.toThrowError("Array index out of bound");
  });

  it("#insert, Verify insert action throws an error when an unavailable index is used", () => {
    let arr = new CustomArray();

    expect(() => arr.insert(10, "new value")).to.toThrowError(
      "Index is unavailable"
    );
  });

  it("#insert, Verify after inserting an element length of the array is returned", () => {
    let arr = new CustomArray();
    arr.push(1);
    arr.push(3);
    arr.insert(1, 2);
    let arrayLength = arr.push(4);

    expect(arrayLength).to.be.equal(4);
  });
});
