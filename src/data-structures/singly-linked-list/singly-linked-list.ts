class SinglyNode {
  public value: number;
  public next?: SinglyNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export default class SinglyLinkedList {
  public head?: SinglyNode | null;
  public tail?: SinglyNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public append(value: number) {
    const newNode = new SinglyNode(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  public remove(value: number) {
    if (this.head === null) throw new Error("Singly linked list is empty");

    let prev = this.head;
    for (
      let searchNode: SinglyNode | null | undefined = this.head;
      searchNode !== null;
      searchNode = searchNode!.next
    ) {
      if (searchNode!.value === value) {
        if (searchNode === this.head && searchNode === this.tail) {
          this.head = this.tail = null;
          return true;
        } else if (searchNode === this.head) {
          this.head = this.head!.next;
          return true;
        } else if (searchNode === this.tail) {
          this.tail = prev;
          return true;
        }

        prev!.next = searchNode!.next;
        return true;
      }
      prev = searchNode;
    }
    return false;
  }

  public insert(searchValue: number, insertValue: number) {
    if (this.head === null) throw new Error("Singly linked list is empty");

    for (
      let searchNode: SinglyNode | null | undefined = this.head;
      searchNode !== null;
      searchNode = searchNode!.next
    ) {
      if (searchNode!.value === searchValue) {
        if (searchNode === this.tail) {
          this.append(insertValue);
        } else {
          const newNode = new SinglyNode(insertValue);
          newNode.next = searchNode!.next;
          searchNode!.next = newNode;
        }
        return true;
      }
    }
    return false;
  }

  public get(index: number) {
    let length = 0;
    for (let current = this.head; current !== null; current = current!.next) {
      if (length === index) {
        return current!.value;
      }
      length++;
    }
  }

  public push(value: number) {
    const newNode = new SinglyNode(value);
    if (this.tail !== null) {
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
    if (this.head === null) throw new Error("Singly linked list is empty");

    this.tail = this.head;
    let tmp1 = null,
      tmp2 = null;
    while (this.head !== null) {
      tmp2 = this.head!.next;
      this.head!.next = tmp1;
      tmp1 = this.head;
      this.head = tmp2;
    }
    this.head = tmp1;
  }

  public printForward() {
    for (let current = this.head; current !== null; current = current!.next) {
      console.log(current!.value);
    }
  }
}
