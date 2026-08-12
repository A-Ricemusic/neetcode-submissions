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
    inorderTraversal(root) {
        let curr = root
        const stack = []
        const res = []

        while (stack.length !== 0 || curr !== null) {
            while (curr !== null) {
                stack.push(curr)
                curr = curr.left
            }
            curr = stack.pop()
            res.push(curr.val)
            curr = curr.right
        }
        return res
    }
}
