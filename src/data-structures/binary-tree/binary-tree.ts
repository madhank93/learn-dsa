class BinaryNode {
  public left: BinaryNode | null;
  public value: number;
  public right: BinaryNode | null;

  constructor(value: number) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

class BinaryTree {
  public root: BinaryNode | null;

  constructor() {
    this.root = null;
  }

  public addToNode(node: BinaryNode | null, value: number) {
    if (node === null) {
      return new BinaryNode(value);
    }

    if (value > node.value) {
      node.right = this.addToNode(node.right, value);
    } else {
      node.left = this.addToNode(node.left, value);
    }
    return node;
  }
}

const bst = new BinaryTree();

bst.root = bst.addToNode(bst.root, 5);
bst.root = bst.addToNode(bst.root, 7);
bst.root = bst.addToNode(bst.root, 1);
bst.root = bst.addToNode(bst.root, 11);

console.log(bst);
