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
});
