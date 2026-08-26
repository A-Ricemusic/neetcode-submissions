/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class NodeValue {
    constructor(minNode, maxNode, maxSize) {
        this.maxNode = maxNode;
        this.minNode = minNode;
        this.maxSize = maxSize;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    largestBSTSubtree(root) {
        return this.largestBSTSubtreeHelper(root).maxSize;
    }

    largestBSTSubtreeHelper(root) {
        if (!root) {
            return new NodeValue(
                Infinity,
                -Infinity,
                0,
            );
        }

        let left = this.largestBSTSubtreeHelper(root.left);
        let right = this.largestBSTSubtreeHelper(root.right);

        if (left.maxNode < root.val && root.val < right.minNode) {

            return new NodeValue(
                Math.min(root.val, left.minNode),
                Math.max(root.val, right.maxNode),
                left.maxSize + right.maxSize + 1,
            );
        }

        return new NodeValue(
            -Infinity,
            Infinity,
            Math.max(left.maxSize, right.maxSize),
        );
    }
}
