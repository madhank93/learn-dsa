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
      current != null;
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

  public print() {
    for (let offset = 0; offset < this.size; offset++) {
      for (
        let current: Entry | null = this.table[offset];
        current != null;
        current = current!.nextEntry
      ) {
        console.log(`${current.key} : ${current.value}`);
      }
    }
  }

  public remove(key: number) {
    const index = this.hash(key);
    let trailing = this.table[index];
    let current = trailing;

    while (current) {
      if (key === current.key) {
        if (this.table[index] === current) {
        }
      }
    }
  }
}

const ht = new HashTable();

ht.put(244, "Test");
ht.put(244, "Test 1");
ht.put(240, "Test");
ht.put(250, "Test 2");

ht.print();

console.log(ht);
