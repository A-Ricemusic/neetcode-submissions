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

    diameterOfBinaryTree(root) {
        let res = 0
        const dfs = (node) => {
            if (!node) {
                return 0
            }

            const c1 = dfs(node.left)
            const c2 = dfs(node.right)
            res = Math.max(res, c1 + c2)
            return Math.max(c1,c2) + 1
        }

        dfs(root)
        return res
    }
}
