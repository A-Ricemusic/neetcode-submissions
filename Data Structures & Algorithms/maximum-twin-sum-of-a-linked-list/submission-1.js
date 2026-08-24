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
     * @return {number}
     */
    pairSum(head) {
        if (!head) return 0;
        let mid = head
        let fast = head
        let prev = null
        //find mid
        while (fast && fast.next) {
            prev = mid
            mid = mid.next
            fast = fast.next.next
        }
        //reverse list
        prev.next = null
        let tail = null
        while (mid) {
            const tmp = mid.next
            mid.next = tail
            tail = mid
            mid = tmp
        }

        let l = head
        let r = tail
        let res = 0
        while (l || r) {
            res = Math.max(res, l.val + r.val)
            l = l.next
            r = r.next
        }
        return res
    }
}
