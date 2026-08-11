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

        let stack = [];

        while (root || stack.length) {
            while (root) {
                stack.push(root)
                root = root.left
            }
            root = stack.pop()
            this.arr.push(root.val)
            root = root.right;
        }
        
    }

    /**
     * @return {number}
     */
    next() {
        return this.arr[this.itr++]
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.itr <  this.arr.length
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
