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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @param {number} target
     * @return {boolean}
     */
    twoSumBSTs(root1, root2, target) {

        const dfs = (p,q) => {
            if (!p || !q) return false;
            const curr = p.val + q.val;
            let res = false
            if (curr > target) {
                res = res || dfs(p,q.left)
            } else if (curr < target) {
                res = res || dfs(p,q.right)
            } else {
                return true;
            }

            res = res || dfs(p.left,q);
            res = res || dfs(p.right,q);
            return res;
        
        };

        return dfs(root1,root2);
    }
}
