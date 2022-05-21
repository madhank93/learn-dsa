class DoubleNode {
  public previous: DoubleNode | null;
  public value: number;
  public next: DoubleNode | null;

  constructor(value: number) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class DoubleLinkedList {
  public head: DoubleNode | null;
  public tail: DoubleNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public addToBack(value: number) {
    const newNode = new DoubleNode(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
  }

  public addToFront(value: number) {
    const newNode = new DoubleNode(value);

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
        const newNode = new DoubleNode(insertValue);

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
        const newNode = new DoubleNode(insertValue);

        newNode.previous = searchNode.next;
        newNode.next = searchNode.next!.previous;
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

let dll = new DoubleLinkedList();

dll.addToBack(5);
dll.addToBack(7);
// dll.addToBack(10);
// dll.addToBack(56);
// dll.addToFront(1);
// dll.addToFront(0);
//dll.removeNode(6); k
dll.insertBefore(7, 6);
dll.addToBack(8);
console.log("Tail value: ", dll.tail!.value);

dll.printForward();
