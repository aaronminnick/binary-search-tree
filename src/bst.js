export default class bst {
  constructor() {
    this.root = null;
  }

  insert(node) {
    if (this.root == null) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > node.data) {
          if (currentNode.left == null) {
            currentNode.left = node;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < node.data) {
          if (currentNode.right == null) {
            currentNode.right = node;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else return this;
      }
    }
  }
}