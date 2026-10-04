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
    isValidBST(root) {
        const dfs = (curr, arr) => {
            if (!curr) return true;
            if (curr.val <= arr[0] || curr.val >= arr[1]) return false;
            let res = dfs(curr.left, [arr[0], Math.min(arr[1], curr.val)]);
            res = res && dfs(curr.right, [Math.max(arr[0], curr.val), arr[1]]);
            return res;
        }

        return dfs(root,[-Infinity,Infinity])
    }
}
