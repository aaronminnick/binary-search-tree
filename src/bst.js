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

  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value && currentNode.left != null) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value && currentNode.right != null) {
          currentNode = currentNode.right;
        } else return false;
      }
    }
  }
}

//TODO: add methods to rotate nodes and balance tree