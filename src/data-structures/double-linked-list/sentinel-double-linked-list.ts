class SentinelNode {
  public previous: SentinelNode | null;
  public value: number | undefined;
  public next: SentinelNode | null;

  constructor(value?: number) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class SentinelList {
  public head: SentinelNode | null;
  public tail: SentinelNode | null;

  constructor(value: number) {
    this.head = new SentinelNode();
    this.tail = new SentinelNode();
    this.head.next = this.tail;
    this.tail.previous = this.head;
    this.insertNode(this.tail.previous, value);
  }

  private insertNode(node: SentinelNode | null, value: number) {
    const newNode = new SentinelNode(value);

    newNode.previous = node;
    newNode.next = node!.next;
    newNode.previous!.next = newNode.next!.previous = newNode;

    return newNode;
  }

  public addToBack(value: number) {
    this.insertNode(this.tail!.previous, value);
  }

  public printForward() {
    for (
      let current = this.head!.next;
      current != this.tail;
      current = this.head!.next
    )
      console.log(current!.value);
  }

  private removeFromNode(deleteValue: SentinelNode | null) {}

  public removeNode(deleteValue: number) {
    for (
      let remove = this.head!.next;
      remove != this.tail;
      remove = this.head!.next
    ) {
      if (remove!.value === deleteValue) {
        this.removeFromNode(remove);
      }
    }
  }
}

const sll = new SentinelList(5);
sll.addToBack(6);
sll.addToBack(7);
sll.addToBack(8);
sll.addToBack(9);
sll.printForward();
