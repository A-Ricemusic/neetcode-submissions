/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 * 
 * 
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    rob(root) {

        const dfs = (curr) => {
            if (!curr) {
                return [0,0];
            }
            const left = dfs(curr.left);
            const right = dfs(curr.right)
            return [curr.val + left[1] + right[1], Math.max(...left) + Math.max(...right)]
        }


        const res = dfs(root)
        return Math.max(...res)

    }
}
