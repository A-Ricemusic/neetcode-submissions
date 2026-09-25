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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let res = []
        const dfs = (curr) => {
            if (!curr) return;
            res.push(curr.val);
            dfs(curr.left);
            dfs(curr.right);
        }


        dfs(root)
        return res;

    }
}
