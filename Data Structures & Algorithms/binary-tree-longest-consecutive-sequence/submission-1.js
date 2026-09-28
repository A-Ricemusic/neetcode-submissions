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
     * 
     * time: O(n)
     * space: O(n)
     */
    longestConsecutive(root) {

        const dfs = (curr, par) => {
            if (!curr) return 1;
            const l = dfs(curr.left,curr);
            const r = dfs(curr.right,curr);
            if (!par) return Math.max(l,r);
            if (par.val + 1 !== curr.val) {
                return Math.max(l,r);
            } else {
                return 1 + Math.max(l,r);
            }
            
        }
        return dfs(root,null);
    }
}
