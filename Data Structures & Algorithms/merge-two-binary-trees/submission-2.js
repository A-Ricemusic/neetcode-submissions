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
            if (!n1 && !n2) return null;
            const v1 = n1? n1.val : 0;
            const v2 = n2? n2.val : 0;
            const curr = new TreeNode(v1 + v2);
            curr.left = dfs(n1? n1.left : null, n2? n2.left : null);
            curr.right = dfs(n1? n1.right : null, n2? n2.right : null);
            return curr;
        };
        return dfs(root1,root2)
        
    }
}
