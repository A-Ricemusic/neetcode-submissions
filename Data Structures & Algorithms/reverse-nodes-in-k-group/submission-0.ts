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
     * @param {number} k
     * @return {ListNode}
     */
    getKth(curr, k) {
        while (curr && k > 0) {
            curr = curr.next
            k--;
        }
        return curr

    }
    reverseKGroup(head: ListNode | null, k: number): ListNode {
        let dummy: ListNode = new ListNode(0);
        let groupPrev: ListNode = dummy;
        dummy.next = head
        let tmp: ListNode = dummy

        while (true) {
            let kth: ListNode = this.getKth(groupPrev, k)
            if (!kth) {
                break
            }
            let groupNext: ListNode = kth.next;
            let prev: ListNode = kth.next;
            let curr: ListNode = groupPrev.next;

            while (curr !== groupNext) {
                tmp = curr.next
                curr.next = prev
                prev = curr
                curr = tmp
            }
            tmp = groupPrev.next;
            groupPrev.next = kth
            groupPrev = tmp
        }

        return dummy.next


    }
}
