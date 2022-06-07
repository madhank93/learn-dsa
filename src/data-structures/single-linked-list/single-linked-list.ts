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

  public addToBack(value: number) {
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
        // Node to be deleted is Head
        if (searchNode === this.head) this.head = this.head.next;
        // Delete Non-Head node
        prev!.next = searchNode.next;
        return true;
      }
      prev = searchNode;
    }
    return false;
  }

  public insertAfter(searchValue: number, insertValue: number) {
    for (
      let searchNode = this.head;
      searchNode != null;
      searchNode = searchNode.next
    ) {
      if (searchNode.value === searchValue) {
        if (searchNode === this.tail) {
          this.addToBack(insertValue);
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

test.addToBack(5);
test.addToBack(7);
test.addToBack(9);

test.insertAfter(9, 10);
test.addToBack(15);
test.remove(9);
test.remove(10);

test.printForward();
