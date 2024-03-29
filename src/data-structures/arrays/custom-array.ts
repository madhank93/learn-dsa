export default class CustomArray {
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
   * The `getLength()` returns length of an array
   */
  public getLength(): number {
    return this.length;
  }

  /**
   * The `get()` method takes an integer value and returns the item at that index
   * @param index integer values
   * @returns the item at that index
   */
  public get(index: number): string | number {
    if (index < this.length && index >= 0) {
      return this.data.get(index)!;
    } else throw new Error("Array index out of bound");
  }

  /**
   * The `pop()` method removes the last element from an array and returns that element.
   */
  public pop() {
    if (this.length <= 0) {
      throw new Error("Array is empty cannot perform pop() action");
    }
    const item = this.data.get(this.length - 1);
    this.data.delete(this.length - 1);
    this.length--;
    return item;
  }

  /**
   * The `insert()` method adds the given value in the specified index
   * @param index in which index the values need to be added
   * @param value number or string value to be added
   * @returns
   */
  public insert(index: number, value: string | number): number {
    if (index < 0 || index > this.length) {
      throw new Error("Index is unavailable");
    }
    this.shiftRight(index);
    this.data.set(index, value);
    return this.length;
  }

  /**
   * When an element in the array has been inserted;
   * value in the that index of an array has to be shifted to right; till the end of an array
   * @param index from which index the values to replaced
   */
  private shiftRight(index: number) {
    for (let i = this.length; i >= index; i--) {
      this.data.set(i, this.data.get(i - 1) as number | string);
    }
    this.length++;
  }

  /**
   * The `delete()` method deletes the item for the given index and return the length
   * @param index deletes the item for the given index
   */
  public delete(index: number): number {
    this.data.delete(index);
    this.shiftLeft(index);
    return this.length;
  }

  /**
   * When an element in the array has been deleted;
   * values in the next index of an array has to be shifted to that place till the end of an array
   * @param index from which index the values to replaced
   */
  private shiftLeft(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data.set(i, this.data.get(i + 1) as number | string);
    }
    this.data.delete(this.length - 1);
    this.length--;
  }
}
