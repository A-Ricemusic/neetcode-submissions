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
    findLeaves(root) {
        let res = [[]]

        const dfs = (node) => {
            if (!node) {
                return 0;
            };

            const leftH = dfs(node.left); 
            const rightH = dfs(node.right); 

            const heightOfNode = Math.max(leftH,rightH);
            if (heightOfNode + 1 > res.length) {
                res.push([]);
            }

            res[heightOfNode].push(node.val);
            return heightOfNode + 1;
        }

        dfs(root);
        return res;

    }
}
