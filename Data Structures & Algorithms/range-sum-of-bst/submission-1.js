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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {

        let res = 0
        const dfs = (curr) => {
            if (!curr) return
            dfs(curr.left)
            if (curr.val >= low && curr.val <= high) {
                res += curr.val;
            }
            dfs(curr.right);
        }
        dfs(root);
     

        return res;
    }
}
