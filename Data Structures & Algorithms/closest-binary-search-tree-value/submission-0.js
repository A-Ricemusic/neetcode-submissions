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
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        let res = root.val;
        let minDist = Math.abs(target - root.val)
        const dfs = (curr) => {
            if (!curr) return;
            const dist = Math.abs(target - curr.val)
            if (dist < minDist) {
                minDist = dist;
                res = curr.val
            } else if (dist === minDist) {
                res = Math.min(res, curr.val)
            };

            if (target < curr.val) {
                dfs(curr.left);
            } else if (target > curr.val) {
                dfs(curr.right);
            } else {
                return;
            }
        };

        dfs(root)
        return res;
    }
}
