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
        const stack1 = [p];
        const stack2 = [q];
        while (stack1.length > 0 && stack2.length > 0) {
            const n1 = stack1.pop();
            const n2 = stack2.pop();
            if (!n1 && !n2) continue;
            if (!n1 || !n2) return false;
            if (n1.val !== n2.val) return false;
            stack1.push(n1.left);
            stack1.push(n1.right);
            stack2.push(n2.left);
            stack2.push(n2.right);
        }

        return stack1.length === 0 && stack2.length === 0;
    }
}
