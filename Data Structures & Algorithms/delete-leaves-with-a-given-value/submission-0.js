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
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        if (root.val === target && !root.left && !root.right) return null;
        const dfs = (node, par) => {
            if (!node) return;
            if (node.val === target && !node.left && !node.right) {
                if (par.left === node) {
                    par.left = null;
                } else if (par.right === node) {
                    par.right = null;
                }
                return;
            }

            dfs(node.left, node);
            dfs(node.right, node);

            if (node.val === target && !node.left && !node.right) {  if (!par) {
                    root = null
                }
                else if (par.left === node) {
                    par.left = null;
                } else if (par.right === node) {
                    par.right = null;
                }
                return;
            }
        }

        dfs(root,null)
        return root
    }
}
