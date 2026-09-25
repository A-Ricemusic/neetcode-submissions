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
    maxDepth(root) {
        const dfs = (curr) => {

            return !curr? 0 : Math.max(dfs(curr.left), dfs(curr.right)) + 1;
        }


        return dfs(root)
    }
}
