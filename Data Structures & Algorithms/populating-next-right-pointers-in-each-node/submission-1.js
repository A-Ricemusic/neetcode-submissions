/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if (!root) return root
        let curr = root;
        let nxt = curr.left

        while (curr && nxt) {
            curr.left.next = curr.right;
            if (curr.next) {
                curr.right.next = curr.next.left;
            }
            curr = curr.next
            if (!curr) {
                curr = nxt;
                nxt = curr.left
            }
        }

        return root;
        
    }
}
