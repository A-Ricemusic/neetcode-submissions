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
     * @return {boolean}
     * 
     * head = [1,2,3,3,2,1]
     */
    isPalindrome(head) {
        let mid = head
        let fast = head
        while (fast && fast.next) {
            mid = mid.next
            fast = fast.next.next
        }
        let tail = null;
        let curr = mid;

        while (curr) {
            const tmp = curr.next;
            curr.next = tail;
            tail = curr;
            curr = tmp ;
        }

        curr = head;

        while (curr !== null && tail !== null) {
            if (curr.val !== tail.val) return false;
            curr = curr.next;
            tail = tail.next;
        }

        return true



    }
}
