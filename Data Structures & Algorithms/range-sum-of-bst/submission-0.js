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
        const arr = []
        const dfs = (curr) => {
            if (!curr) return
            dfs(curr.left)
            arr.push(curr.val);
            dfs(curr.right);
        }
        dfs(root);
        let res = 0
        for (const num of arr) {
            if (num >= low && num <= high) {
                res += num
            }
        }

        return res;
    }
}
