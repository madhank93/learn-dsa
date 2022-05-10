class Node {
  public value: number;
  public next?: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  public head?: Node | null;
  public tail?: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public addToBack(value: number) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  public printForward() {
    for (let current = this.head; current != null; current = current!.next) {
      console.log(current.value);
    }
  }
}

let test = new SingleLinkedList();

test.addToBack(5);
test.addToBack(6);
test.addToBack(10);
test.addToBack(5);

test.printForward();
