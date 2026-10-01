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
    longestConsecutive(root) {
        let res = 0;
        const dfs = (curr) => {
            if (!curr) return 0;
            let l = dfs(curr.left) + 1;
            let r = dfs(curr.right) + 1;
            if (curr.left && curr.left.val !== curr.val + 1) {
                l = 1;
            }

             if (curr.right && curr.right.val !== curr.val + 1) {
                r = 1;
            }
            const len = Math.max(l,r);
            res = Math.max(res,len);
            return len;
        }

        dfs(root);
        return res;
    }
}
