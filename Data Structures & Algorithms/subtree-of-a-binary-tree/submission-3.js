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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let res = false;
        const dfs = (curr) => {
            if (!curr || res) return;
            if (curr.val === subRoot.val) {
                if (this.isSameTree(curr, subRoot)) {
                    res = true;
                };
            };

            dfs(curr.left);
            dfs(curr.right);
        }

        dfs(root);
        return res;
    }

    isSameTree(p,q) {
        const stack1 = [p];
        const stack2 = [q];

        while (stack1.length > 0 && stack2.length > 0) {
            const n1 = stack1.pop();
            const n2 = stack2.pop();
            if (n1 === null && n2 === null) continue;
            if (n1 === null || n2 === null) return false;
            if (n1.val !== n2.val) return false;
            stack1.push(n1.left);
            stack1.push(n1.right);
            stack2.push(n2.left);
            stack2.push(n2.right);
        }
        return stack1.length === 0 && stack2.length === 0;
    }
}
