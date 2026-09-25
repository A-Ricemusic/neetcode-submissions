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
     * @return {TreeNode}
     */
    invertTree(root) {
        const dfs = (curr) => {
            if (!curr) return;
            [curr.left, curr.right] = [curr.right, curr.left];
            dfs(curr.left);
            dfs(curr.right);
        }

        dfs(root)
        return root
    }
}
