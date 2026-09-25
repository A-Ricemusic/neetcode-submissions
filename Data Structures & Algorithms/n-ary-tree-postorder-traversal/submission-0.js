/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        const res = []
        const dfs = (curr) => {
            if (!curr) return;
            for (const child of curr.children) {
                dfs(child)
            }
            res.push(curr.val);
        }


        dfs(root);
        return res;

    }
}
