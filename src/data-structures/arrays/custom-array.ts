//TODO: Read about Map and Object
//TODO: Add some tests and comments
class CustomArray {
  private length: number;
  private data: Map<number, string | number>;

  constructor() {
    this.length = 0;
    this.data = new Map();
  }

  public push(item: string | number) {
    this.data.set(this.length, item);
    this.length++;
  }

  public pop() {
    this.data.delete(this.length - 1);
  }

  public delete(index: number) {
    this.data.delete(index);
    this.shiftValues(index);
  }

  private shiftValues(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data.set(i, this.data.get(i + 1) as number | string);
    }
    this.data.delete(this.length - 1);
    this.length--;
  }
}
