import bst from '../src/bst.js';
import bstnode from '../src/bstnode.js';

describe('binarySearchTree', () => {

 const tree = new bst();

  beforeEach(() => {
    tree.insert(new bstnode(4));
    tree.insert(new bstnode(2));
    tree.insert(new bstnode(6));
    tree.insert(new bstnode(1));
    tree.insert(new bstnode(3));
    tree.insert(new bstnode(5));
    tree.insert(new bstnode(7));  
  });

  test('it should return true if root node == 4', () => {
    expect(tree.search(4)).toEqual(true);
  });
});