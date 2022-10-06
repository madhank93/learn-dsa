// TODO: Add tests
class Entry {
  public key: number;
  public value: string;
  public nextEntry: Entry | null;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
    this.nextEntry = null;
  }
}

class HashTable {
  private size: number;
  private table: Array<Entry>;

  constructor(size: number = 10) {
    this.size = size;
    this.table = new Array<Entry>(this.size);
  }

  private hash(key: number): number {
    return key % this.size;
  }

  public put(key: number, value: string): boolean {
    const index = this.hash(key);
    for (
      let current: Entry | null = this.table[index];
      current !== null;
      current = current.nextEntry
    ) {
      // If key exists update the value
      if (current.key === key) {
        current.value = value;
        return false;
      }
    }

    // Key does not exist, add it to bucket
    const newEntry = new Entry(key, value);
    newEntry.nextEntry = this.table[index];
    this.table[index] = newEntry;
    return true;
  }

  public get(key: number) {
    const address = this.hash(key);

    for (
      let current: Entry | null = this.table[address];
      current;
      current = current.nextEntry
    ) {
      if (current.key === key) return current.value;
    }
  }

  public getKeys() {
    let keys: number[] = [];

    for (let index = 0; index < this.size; index++) {
      for (
        let current: Entry | null = this.table[index];
        current !== null;
        current = current.nextEntry
      ) {
        keys.push(current.key);
      }
    }
    return keys;
  }

  public remove(key: number) {
    const address = this.hash(key);

    for (
      let current: Entry | null = this.table[address];
      current;
      current = current.nextEntry
    ) {
      if (current.key === key) {
      }
    }
  }

  public print() {
    for (let offset = 0; offset < this.size; offset++) {
      for (
        let current: Entry | null = this.table[offset];
        current !== null;
        current = current!.nextEntry
      ) {
        console.log(`${current.key} : ${current.value}`);
      }
    }
  }
}

const ht = new HashTable();

ht.put(244, "Test");
ht.put(244, "Test 1");
ht.put(240, "Test");
ht.put(250, "Test 2");
ht.put(350, "Test 3");

ht.print();

console.log(ht.getKeys());
