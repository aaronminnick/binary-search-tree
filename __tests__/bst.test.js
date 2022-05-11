import bst from '../src/bst.js';

describe('bst', () => {

  test('should initialize a binary search tree with a root of null', () => {
    let tree = new bst();
    expect(tree.root).toEqual(null);
  });
});