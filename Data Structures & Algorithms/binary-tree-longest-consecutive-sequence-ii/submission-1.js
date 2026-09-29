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
            let dcr = 1;
            if (curr.left !== null) {
                let left = dfs(curr.left);
                if (curr.val === curr.left.val + 1) {
                    dcr = left[1] + 1
                } else if (curr.val === curr.left.val - 1) {
                    inc = left[0] + 1
                }
            }

            if (curr.right !== null) {
                let right = dfs(curr.right);
                if (curr.val === curr.right.val + 1) {
                    dcr = Math.max(dcr,right[1] + 1);
                } else if (curr.val === curr.right.val - 1) {
                    inc = Math.max(inc,right[0] + 1);
                }
            }

            res = Math.max(res, dcr + inc - 1);
            return [inc,dcr]
        }

        dfs(root)

        return res;
    }
}
