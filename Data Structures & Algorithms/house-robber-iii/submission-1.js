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
    rob(root) {

        const dfs = (curr) => {
            if (!curr) {
                return [0,0];
            }
            const l = dfs(curr.left);
            const r = dfs(curr.right);
            return [Math.max(l[0] + r[0], curr.val + l[1] + r[1]), l[0] + r[0]]
        }

        const res = dfs(root)
        return Math.max(...res)

    }
}
