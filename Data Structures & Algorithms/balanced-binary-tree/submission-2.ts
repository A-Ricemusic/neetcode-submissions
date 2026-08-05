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
     * @return {boolean}
     */
    dfs(curr: TreeNode, height: number): number{
            if (!curr) {
                return height
            }
            return Math.max(this.dfs(curr.left, height + 1), this.dfs(curr.right, height + 1))
    }


    isBalanced(root: TreeNode | null): boolean {
        if (!root) {
            return true;
        }

        const heightLeft: number = this.dfs(root.left,0)
        const heightRight: number = this.dfs(root.right,0)

        if (Math.abs(heightLeft - heightRight) > 1) {
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)
        
    }
}
