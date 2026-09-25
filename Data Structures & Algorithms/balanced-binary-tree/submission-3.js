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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true
        const dfs = (curr) => {
            if (!curr) return 0;
            const l = dfs(curr.left);
            const r = dfs(curr.right);
            if (Math.abs(r - l) > 1) res = false;
            return Math.max(l,r) + 1
        }

        dfs(root);
        return res;
    }
}
