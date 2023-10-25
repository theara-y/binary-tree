const TreeNode = require('./TreeNode');

class BinaryTree {
    static serialize(tree) {
        let arr = []
        // In a preorder traversal
        // 1. Root is visited
        // 2. Left is traversed
        // 3. Right is traversed
        function preorder(node) {
            if (node == null) {
                arr.push(null);
                return
            }

            arr.push(node.val)
            preorder(node.left)
            preorder(node.right)
        }

        preorder(tree)
        return arr
    }

    static deserialize(arr, method) {
        let idx = 0;

        function preorder() {
            if (arr[idx] == null) {
                idx += 1;
                return null;
            }

            let node = new TreeNode(arr[idx]);
            idx += 1
            node.left = preorder();
            node.right = preorder();
            return node;
        }
    
        if (method == "preorder")
            return preorder();
        return null
    }
}

module.exports = BinaryTree;