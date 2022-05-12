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

  test('it should return false if root node != 31', () => {
    expect(tree.search(31)).toEqual(false);
  });

  test('it should return true if the first child node on the left == 2', () => {
    expect(tree.search(2)).toEqual(true);
  });

  test('it should return false if the value 0 is not in the tree', () => {
    expect(tree.search(0)).toEqual(false);
  });

  test('it should return true for the value 7', () => {
    expect(tree.search(7)).toEqual(true);
  });
});