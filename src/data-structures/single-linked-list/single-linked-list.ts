class SingleNode {
  public value: number;
  public next?: SingleNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export default class SingleLinkedList {
  public head?: SingleNode | null;
  public tail?: SingleNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public append(value: number) {
    const newNode = new SingleNode(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  public remove(value: number) {
    let prev = this.head;
    for (
      let searchNode = this.head;
      searchNode != null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === value) {
        // Node to be deleted is Head and Tail
        if (searchNode === this.head && searchNode === this.tail)
          this.head = this.tail = null;
        // Node to be deleted is Head
        else if (searchNode === this.head) this.head = this.head.next;
        // Node to be deleted is Tail
        else if (searchNode === this.tail) this.tail = prev;
        // Delete Non-Head node
        prev!.next = searchNode.next;
        return true;
      }
      prev = searchNode;
    }
    return false;
  }

  public insert(searchValue: number, insertValue: number) {
    for (
      let searchNode = this.head;
      searchNode != null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        if (searchNode === this.tail) {
          this.append(insertValue);
        } else {
          const newNode = new SingleNode(insertValue);
          newNode.next = searchNode.next;
          searchNode.next = newNode;
        }
        return true;
      }
    }
    return false;
  }

  public get(index: number) {
    let length = 0;
    for (let current = this.head; current != null; current = current.next) {
      if (length === index) {
        return current.value;
      }
      length++;
    }
  }

  public printForward() {
    for (let current = this.head; current != null; current = current!.next) {
      console.log(current.value);
    }
  }
}
