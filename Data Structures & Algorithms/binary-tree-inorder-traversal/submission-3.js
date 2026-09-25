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
     * @return {number[]}
     */
    inorderTraversal(root) {
        let res = []
        const inorder = (curr) => {
            if (!curr) return;
            inorder(curr.left)
            res.push(curr.val);
            inorder(curr.right);
        };
        inorder(root);
        return res;

    }
}
