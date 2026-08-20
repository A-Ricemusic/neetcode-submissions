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
     */
    isPalindrome(head) {
        const arr = []
        let curr = head
        while (curr) {
            arr.push(curr.val)
            curr = curr.next
        }

        let l = 0;
        let r = arr.length - 1
        while (l < r) {
            if (arr[l] !== arr[r]) return false;
            l++;
            r--;
        }

        return true
    }
}
