const BinaryTree = require('./BinaryTree');

it('deserialize using preorder traversal', () => {
    const tree = BinaryTree.deserialize([1,2,null,null,3,null,null], 'preorder');
    expect(tree.val).toEqual(1);
    expect(tree.left.val).toEqual(2);
    expect(tree.right.val).toEqual(3);
});

it('serialize using preorder traversal', () => {
    const tree = BinaryTree.deserialize([1,2,null,null,3,null,null], 'preorder');
    const arr = BinaryTree.serialize(tree, 'preorder');
    expect(arr).toEqual([1,2,null,null,3,null,null]);
});

it('deserialize using postorder traversal', () => {
    const tree = BinaryTree.deserialize([null, null, 2, null, null, 3, 1], 'postorder');
    expect(tree.val).toEqual(1);
    expect(tree.left.val).toEqual(2);
    expect(tree.right.val).toEqual(3);
});