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
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        const newNode = new TreeNode(val)
        if (!root) {
            root = newNode;
            return root;
        }

        let curr = root;

        while (true) {
            if (val > curr.val) {
                if (!curr.right) {
                    curr.right = newNode
                    return root;
                }
                curr = curr.right
            } else if(val < curr.val) {
                if (!curr.left) {
                    curr.left = newNode
                    return root;
                }
                curr = curr.left
            } else {
                return root
            }
        }
    }
}
