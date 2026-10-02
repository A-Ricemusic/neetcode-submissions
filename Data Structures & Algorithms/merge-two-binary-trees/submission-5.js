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

        const dfs = (n1,n2) => {
            if (!n2) return n1;
            if (!n1) {
                n1 = new TreeNode(0);
            };
            n1.val += n2.val;
            n1.left = dfs(n1.left, n2.left);
            n1.right = dfs(n1.right, n2.right);
            return n1; 
        }


        return dfs(root1, root2)
    }
}
