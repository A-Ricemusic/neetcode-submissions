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
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.res = []
        this.head = 0;

        const dfs =  (curr) => {
            if (!curr) return 
            dfs(curr.left)
            this.res.push(curr.val)
            dfs(curr.right)
        }
        dfs(root)
    }

    /**
     * @return {number}
     */
    next() {
        return this.res[this.head++]
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.head !== this.res.length
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
