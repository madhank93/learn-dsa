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
    for (
      let searchNode = this.head;
      searchNode != null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        const newNode = new DoublyNode(insertValue);

        newNode.next = searchNode;
        newNode.previous = searchNode.previous;
        searchNode.previous!.next = newNode;
        searchNode.previous = newNode;
      }
    }
  }

  public insertAfter(searchValue: number, insertValue: number) {
    for (
      let searchNode = this.head;
      searchNode != null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        const newNode = new DoublyNode(insertValue);

        newNode.previous = searchNode.next;
        newNode.next = searchNode.next!.previous;
      }
    }
  }

  public remove(value: number) {
    for (
      let searchNode = this.head;
      searchNode != null;
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
    for (let current = this.head; current != null; current = current!.next) {
      console.log(current.value);
    }
  }

  public printBackward() {
    for (
      let current = this.tail;
      current != null;
      current = current!.previous
    ) {
      console.log(current.value);
    }
  }
}

let dll = new DoublyLinkedList();

dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);

dll.remove(3);
dll.printForward();

// let dll = new DoubleLinkedList();

// dll.addToBack(5);
// dll.addToBack(7);
// dll.addToBack(10);
// dll.addToBack(56);
// dll.addToFront(1);
// dll.addToFront(0);
//dll.removeNode(6); k
// dll.insertBefore(7, 6);
// dll.addToBack(8);
// console.log("Tail value: ", dll.tail!.value);

// dll.printForward();