import bstnode from '../src/bstnode.js';

describe('bstnode', () => {

    test('should correctly create a node', () => {
      const node = new BSTNode(36);
      expect(node.data).toEqual(36);
    });
});