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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (p.val > q.val) {
            [p,q] = [q,p]
        }

        let curr = root
        while (true) {
            if (p.val <= curr.val && q.val >= curr.val) {
                return curr
            } else if (p.val > curr.val && q.val > curr.val) {
                curr = curr.right
            } else {
                curr = curr.left
            }
        }
    }
}
