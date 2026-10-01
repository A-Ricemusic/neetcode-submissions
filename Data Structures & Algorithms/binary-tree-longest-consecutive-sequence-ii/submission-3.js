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
            if (!curr) return [0,0];
            let inc = 1;
            let dec = 1;
            if (curr.left) {
                const left = dfs(curr.left);
                if (curr.left.val + 1 === curr.val) {
                    dec = left[1] + 1;
                } else if (curr.left.val - 1 === curr.val) {
                    inc = left[0] + 1;
                }
            };

            if (curr.right) {
                const right = dfs(curr.right);
                if (curr.right.val + 1 === curr.val) {
                    dec = Math.max(dec,right[1] + 1);
                } else if (curr.right.val - 1 === curr.val) {
                    inc = Math.max(inc,right[0] + 1);
                };
            };

            res = Math.max(res, inc + dec - 1);
            return [inc,dec];
        }


        dfs(root);
        return res;
    }
}
