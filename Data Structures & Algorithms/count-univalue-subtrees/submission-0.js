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
     * @return {number}
     */
    countUnivalSubtrees(root) {
        let res = 0;
        const dfs = (curr) => {
            if (!curr) return true;
            const l = dfs(curr.left);
            const r = dfs(curr.right);
            if (!(l && r)) return false;
            const lVal = curr.left !== null? curr.left.val : curr.val;
            const rVal = curr.right !== null? curr.right.val : curr.val;
            if (curr.val === lVal && curr.val === rVal) {
                res++;
                return true
            } else {
                return false;
            }

        }

        dfs(root);
        return res;
    }
}
