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
  public level: number;

  constructor() {
    this.root = null;
    this.level = 0;
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

  private removeNode(
    node: BinaryNode | null,
    value: number
  ): BinaryNode | null {
    if (node === null) return null;

    if (value > node.value) node.right = this.removeNode(node.right, value);
    else if (value < node.value) node.left = this.removeNode(node.left, value);
    else {
      console.log("inside");
      if (node.right === null && node.left === null) return null;
      else if (node.left != null && node.right === null) return node.left;
      else if (node.left === null && node.right != null) return node.right;
      else {
        let successor = node.right;
        while (successor!.left === null) successor = successor!.left;

        node.value = successor!.value;
        node.right = this.removeNode(node.right, successor!.value);
      }
    }

    return node;
  }

  public remove(value: number) {
    this.root = this.removeNode(this.root, value);
  }

  public printTree(current: BinaryNode | null) {
    if (current != null) {
      this.level = this.level + 1;
      this.printTree(current.right);
      const indent = " ".repeat(this.level);
      console.log(indent);
      this.printTree(current.left);
      this.level = this.level - 1;
    }
  }

  public inOrder(node: BinaryNode | null) {
    if (node === null) {
      return;
    }
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  public postOrder(node: BinaryNode | null) {
    if (node === null) {
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
}

const bst = new BinaryTree();

bst.root = bst.addToNode(bst.root, 5);
bst.root = bst.addToNode(bst.root, 7);
bst.root = bst.addToNode(bst.root, 1);
bst.root = bst.addToNode(bst.root, 11);

bst.remove(11);

// console.log(bst);

bst.inOrder(bst.root);
// console.log("***********");
// //bst.postOrder(bst.root);
// bst.printTree(bst.root);
