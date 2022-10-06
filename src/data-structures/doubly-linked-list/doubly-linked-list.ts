// TODO: Complete tests for remaining methods
class DoublyNode {
  public previous: DoublyNode | null;
  public value: number;
  public next: DoublyNode | null;

  constructor(value: number) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

export default class DoublyLinkedList {
  public head: DoublyNode | null;
  public tail: DoublyNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public append(value: number) {
    const newNode = new DoublyNode(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }

  public prepend(value: number) {
    const newNode = new DoublyNode(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  public insertBefore(searchValue: number, insertValue: number) {
    if (this.head === null) throw new Error("Doubly linked list is empty");
    for (
      let searchNode: DoublyNode | null = this.head;
      searchNode !== null;
      searchNode = searchNode!.next
    ) {
      if (searchNode.value === searchValue) {
        const newNode = new DoublyNode(insertValue);

        newNode.next = searchNode;
        newNode.previous = searchNode.previous;
        searchNode.previous!.next = newNode;
        searchNode.previous = newNode;

        return true;
      }
    }
    return false;
  }

  public insertAfter(searchValue: number, insertValue: number) {
    if (this.head === null) throw new Error("Doubly linked list is empty");
    for (
      let searchNode: DoublyNode | null = this.head;
      searchNode !== null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        const newNode = new DoublyNode(insertValue);

        newNode.previous = searchNode.next;
        newNode.next = searchNode.next!.previous;

        return true;
      }
    }
    return false;
  }

  public remove(value: number) {
    for (
      let searchNode = this.head;
      searchNode !== null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === value) {
        if (searchNode === this.head && searchNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (searchNode === this.head) {
          this.head = this.head.next;
          this.head!.previous = null;
        } else if (searchNode === this.tail) {
          this.tail = this.tail.previous;
          this.tail!.next = null;
        }

        searchNode.previous!.next = searchNode.next;
        searchNode.next!.previous = searchNode.previous;
      }
    }
  }

  public printForward() {
    for (let current = this.head; current !== null; current = current!.next) {
      console.log(current.value);
    }
  }

  public printBackward() {
    for (
      let current = this.tail;
      current !== null;
      current = current!.previous
    ) {
      console.log(current.value);
    }
  }
}
