/**
 * Definition for a _Node.
 * class _Node {
 *     constructor(val = 0, left = null, right = null, parent = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.parent = parent;
 *     }
 * }
 */

class Solution {
    /**
     * @param {_Node} node
     * @return {_Node}
     * 
     * 1.) leaf node:
     *      leaf was left:
     *          pop back to parent
     *       leaf was right:
     *              null
     * 
     * 2.) left and no right:
     *  pop back up to parent
     * 
     * 3.) right and no left:
     *      traverse right side
     * 
     * 4.) left and right:
     *      traverse right side
     * 
     * 
     * 
     */
    inorderSuccessor(node) {

        if (!node.right) {
            let curr = node
            let par = node.parent
            while (par && par.left !== curr) {
                par = par.parent
                curr = curr.parent
            }
           return par

        }  else {
            let curr = node.right;
            while (curr.left) {
                curr = curr.left
            }
            return curr;
        }

    }
}
