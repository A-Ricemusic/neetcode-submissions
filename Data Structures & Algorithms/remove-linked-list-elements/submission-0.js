/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let dummy = new ListNode(0);
        dummy.next = head
        let curr = head;
        let prev = dummy;

        while (curr) {
            if (curr.val === val) {
                const tmp = curr.next;
                prev.next = tmp;
                curr.next = null;
                curr = tmp
            } else {
                const tmp = curr
                curr = curr.next
                prev = tmp
            }
        }
        
        return dummy.next


    }
}
