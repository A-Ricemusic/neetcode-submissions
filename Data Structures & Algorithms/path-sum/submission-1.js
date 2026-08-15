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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        if (!root) return false

        const dfs = (node, sum) => {
            if (!node.left && !node.right) return sum + node.val === targetSum? true : false
            let res = false
            if (node.left) {
                res = res || dfs(node.left, sum + node.val) 
            }

            if (node.right) {
                res = res || dfs(node.right, sum + node.val)
            }
            return res;
        }


        return dfs(root,0)
    }
}
