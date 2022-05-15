//TODO: Need to add tests
class SingleNode {
  public value: number;
  public next?: SingleNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  public head?: SingleNode | null;
  public tail?: SingleNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  public addToFront(value: number) {
    const newNode = new SingleNode(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  public insertAfter(searchValue: number, insertValue: number) {
    for (
      let searchNode = this.head;
      searchNode != null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        if (searchNode === this.tail) {
          this.addToFront(insertValue);
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

  public printForward() {
    for (let current = this.head; current != null; current = current!.next) {
      console.log(current.value);
    }
  }
}

let test = new SingleLinkedList();

test.addToFront(5);
test.addToFront(7);
test.addToFront(9);

test.insertAfter(9, 10);
test.addToFront(15);

test.printForward();
