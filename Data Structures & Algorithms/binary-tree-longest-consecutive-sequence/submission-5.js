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
            let L = dfs(curr.left) + 1;
            let R = dfs(curr.right) + 1;
            if (!curr.left || curr.left.val !== curr.val + 1) {
                L = 1
            };
            if (!curr.right || curr.right.val !== curr.val + 1) {
                R = 1;
            }
            const len = Math.max(L,R);
            res = Math.max(res, len);
            return len
        }


        dfs(root);
        return res;
    }
}
