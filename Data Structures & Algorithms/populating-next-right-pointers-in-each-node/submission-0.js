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
     * 1 -> null
     * 2 -> 3
     * 3 -> null
     * q = [1,2,3,4,5,6,7]
     * head = 3
     * size = 2
     * i = 1
     * node = 3
     * 
     * 
     */
    connect(root) {
        if (!root) return null
        const q = [];
        let head = 0;
        q.push(root);
        while (q.length - head > 0) {
            const size = q.length - head
            for (let i = 0; i < size; i++) {
                const node = q[head++];
                if (i + 1 >= size) {
                    node.next = null;
                } else {
                    node.next = q[head];
                }
                if (node.left) {
                    q.push(node.left);
                }
                if (node.right) {
                    q.push(node.right);
                }
            }
        }

        return root
    }
}
