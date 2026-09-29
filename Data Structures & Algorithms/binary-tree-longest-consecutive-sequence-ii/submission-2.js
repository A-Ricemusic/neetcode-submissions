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
            let dcs = 1;

            if (curr.left !== null) {
                const left = dfs(curr.left);
                if (curr.left.val === curr.val + 1) {
                    inc = left[0] + 1;
                } else if (curr.left.val === curr.val - 1) {
                    dcs = left[1] + 1;
                }
            }

            if (curr.right !== null) {
                const right = dfs(curr.right);
                if (curr.right.val === curr.val + 1) {
                    inc = Math.max(inc,right[0] + 1);
                } else if (curr.right.val === curr.val - 1) {
                    dcs = Math.max(dcs,right[1] + 1);
                }
            }
            res = Math.max(res, inc + dcs - 1);
            return [inc,dcs];
        }

        dfs(root);
        return res;
    }
}
