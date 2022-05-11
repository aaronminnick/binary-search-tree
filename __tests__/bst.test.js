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
    tree.insert(node);
    expect(tree.root).toEqual(node);
  });
  
  test('it should add a child node to the left of the root node', () => {
    let tree = new bst();
    let rootNode = new bstnode(36);
    tree.insert(rootNode);
    let newNode = new bstnode(22);
    tree.insert(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test('it should add a child node to the right of the root node', () => {
    let tree = new bst();
    let rootNode = new bstnode(36);
    tree.insert(rootNode);
    let newNode = new bstnode(48);
    tree.insert(newNode);
    expect(rootNode.right.data).toEqual(48);
  });

  test('it should add a child to the left of a child node', () => {
    let tree = new bst();
    let rootNode = new bstnode(36);
    tree.insert(rootNode);
    let node2 = new bstnode(22);
    tree.insert(node2);
    let node3 = new bstnode(11);
    tree.insert(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });

  test('it should add a child to the right of a child node', () => {
    let tree = new bst();
    let rootNode = new bstnode(36);
    tree.insert(rootNode);
    let node2 = new bstnode(22);
    tree.insert(node2);
    let node3 = new bstnode(24);
    tree.insert(node3);
    expect(rootNode.left.right.data).toEqual(24);
  });

  test('it should not add duplicate nodes', () => {
    let tree = new bst();
    let rootNode = new bstnode(36);
    tree.insert(rootNode);
    let duplicateNode = new bstnode(36);
    expect(tree.insert(duplicateNode)).toEqual(
      {
        "root": 
        {
          "data": 36, 
          "left": null, 
          "right": null
        }
      }
    );
  });
});