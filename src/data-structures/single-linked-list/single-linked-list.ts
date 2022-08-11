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
    if (this.head === null) throw new Error("Single linked list is empty");

    let prev = this.head;
    for (
      let searchNode: SingleNode | null | undefined = this.head;
      searchNode != null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === value) {
        if (searchNode === this.head && searchNode === this.tail)
          this.head = this.tail = null;
        else if (searchNode === this.head) this.head = this.head.next;
        else if (searchNode === this.tail) this.tail = prev;

        prev!.next = searchNode.next;
        return true;
      }
      prev = searchNode;
    }
    return false;
  }

  public insert(searchValue: number, insertValue: number) {
    if (this.head === null) throw new Error("Single linked list is empty");

    for (
      let searchNode: SingleNode | null | undefined = this.head;
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

  public push(value: number) {
    const newNode = new SingleNode(value);
    if (this.tail != null) {
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      this.append(value);
    }
  }

  public pop() {
    if (this.tail === null) {
      return undefined;
    } else {
      this.remove(this.tail!.value);
    }
  }

  public reverse() {
    if (this.head === null) throw new Error("Single linked list is empty");

    this.tail = this.head;
    let prevNode, tmp;
    while (this.head != null) {
      tmp = this.head.next;
      this.head.next = prevNode;
      prevNode = this.head;
      this.head = tmp;
    }
    this.head = prevNode;
  }

  public printForward() {
    for (let current = this.head; current != null; current = current!.next) {
      console.log(current.value);
    }
  }
}
