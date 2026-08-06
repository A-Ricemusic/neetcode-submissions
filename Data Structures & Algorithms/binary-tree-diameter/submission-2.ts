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
    res: number;
    constructor() {
        this.res = 0;
    }
    dfs(root: TreeNode, height: number) {
        if (!root) {
            return height
        }

        return Math.max(this.dfs(root.left, height + 1), this.dfs(root.right, height + 1))

    }
    diameterOfBinaryTree(root: TreeNode | null): number {

        if (!root) {
            return 0;
        }

        const heightLeft: number = this.dfs(root.left, 0)
        const heightRight: number = this.dfs(root.right,0)
        
        this.res = Math.max(heightLeft + heightRight,this.res)

        this.diameterOfBinaryTree(root.left)
        this.diameterOfBinaryTree(root.right)
        return this.res
        
        
    }
}
