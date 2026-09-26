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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack1 = [p]
        const stack2 = [q]

        while (stack1.length > 0 && stack2.length > 0) {
            const node1 = stack1.pop();
            const node2 = stack2.pop();
            if (node1 === null && node2 === null) continue;
            if (node1 === null || node2 === null) return false;
            if (node1.val !== node2.val) return false;
            stack1.push(node1.left);
            stack1.push(node1.right);
            stack2.push(node2.left);
            stack2.push(node2.right);
        }

        return stack1.length === 0 && stack2.length === 0
    }
}
