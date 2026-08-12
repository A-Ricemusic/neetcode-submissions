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
        this.arr = []
        this.itr = 0
        this.stack = [];

        while (root) {
            while (root) {
                this.stack.push(root)
                root = root.left
            }
        }
        
    }

    /**
     * @return {number}
     */
    next() {
        let res = this.stack.pop()
        let curr = res.right
        while (curr) {
            this.stack.push(curr)
            curr = curr.left
        }
        return res.val
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.stack.length !== 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
