import bstnode from '../src/bstnode.js';

describe('bstnode', () => {

    test('should correctly create a node', () => {
      const node = new bstnode(36);
      expect(node.data).toEqual(36);
      expect(node.left).toEqual(null);
      expect(node.right).toEqual(null);
    });
});