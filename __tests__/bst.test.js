import bst from '../src/bst.js';
import bstnode from '../src/bstnode.js';

describe('bst', () => {

  test('should initialize a binary search tree with a root of null', () => {
    let tree = new bst();
    expect(tree.root).toEqual(null);
  });

  test('it should create a new root node', () => {
    let tree = new bst();
    let node = new bstnode(36);
    tree.insertNode(node);
    expect(tree.root).toEqual(node);
  });
});