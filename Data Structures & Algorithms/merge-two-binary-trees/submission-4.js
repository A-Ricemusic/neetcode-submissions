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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        
        const dfs = (r1,r2) => {
            if (!r2) return r1;
            if (!r1) {
                r1 = new TreeNode(0);
            }
            r1.val += r2.val;
            r1.left = dfs(r1.left,r2.left);
            r1.right = dfs(r1.right, r2.right);
            return r1;
        }


        return dfs(root1, root2);

    }
}
