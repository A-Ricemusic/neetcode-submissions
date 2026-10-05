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
     * @return {number[][]}
     */
    zigzagLevelOrder(root) {
        if (!root) return [];
        let level = 1;
        const q = [root];
        let head = 0;
        let res = [];
        while (q.length - head > 0) {
            const size = q.length - head;
            const curr = [];
            for (let i = 0; i < size; i++) {
                const n = q[head++];
                curr.push(n.val);
                if (n.left) {
                    q.push(n.left)
                };
                if (n.right) {
                    q.push(n.right)
                }
            }
            if (level % 2 === 0) {
                curr.reverse();
            }
            res.push(curr);
            level++;
        }

        return res;
    }
}
