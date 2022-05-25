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

  public put(key: number, value: string) {
    const index = this.hash(key);
    for (let current = this.table[index]; current; current.nextEntry) {
      if (current.value === value) {
        current.value = value;
        return false;
      }

      const newEntry = new Entry(key, value);
      this.table[index].nextEntry = this.table[index];
      this.table[index] = newEntry;
    }
  }

  public print() {
    for (let offset = 0; offset < this.table.length; offset++) {
      console.log(`${offset}`);
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

ht.print();
