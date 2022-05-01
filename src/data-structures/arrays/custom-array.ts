import { expect } from "chai";
class CustomArray {
  private length: number;
  private data: Map<number, string | number>;

  constructor() {
    this.length = 0;
    this.data = new Map();
  }

  /**
   * The `push()` method adds element to the end of an array and returns the new length of the array.
   * @param item Add string or number
   * @returns length of an array
   */
  public push(item: string | number): number {
    this.data.set(this.length, item);
    this.length++;
    return this.length;
  }

  /**
   * The `get()` method takes an integer value and returns the item at that index
   * @param index integer values
   * @returns the item at that index
   */
  public get(index: number): string | number | undefined {
    return this.data.get(index);
  }

  /**
   * The `pop()` method removes the last element from an array and returns that element.
   */
  public pop() {
    const item = this.data.get(this.length - 1);
    this.data.delete(this.length - 1);
    return item;
  }

  /**
   * The `delete()` method deletes the item for the given index and return the length
   * @param index deletes the item for the given index
   */
  public delete(index: number): number {
    this.data.delete(index);
    this.shiftValues(index);
    return this.length;
  }

  /**
   * When an element in the array has been deleted;
   * values in the next index of an array has to be shifted to that place till the end of an array
   * @param index from which index the values to replaced
   */
  private shiftValues(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data.set(i, this.data.get(i + 1) as number | string);
    }
    this.data.delete(this.length - 1);
    this.length--;
  }
}

let arr1 = new CustomArray();

arr1.push("val 1");
arr1.push("val 2");
arr1.push("val 3");
arr1.push("val 4");

expect(arr1.push("val 5")).to.eq(5);
expect(arr1.pop()).to.eq("val 5");
expect(arr1.delete(1)).to.eql(4);
expect(arr1.get(0)).to.eql("val 1");
expect(arr1.get(1)).to.eql("val 3");
expect(arr1.get(3)).to.eql(undefined);
