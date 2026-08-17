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
     * @return {ListNode}
     * 
     * 
     */
    getGcd(num1,num2) {
        while (num2 > 0) {
            [num1, num2] = [num2, num1 % num2];
        }
        return num1;
    }
    insertGreatestCommonDivisors(head) {
        let curr = head
        while (curr.next) {
            let p1 = curr
            let p2 = curr.next
            const gcd = this.getGcd(p1.val,p2.val)
            const newNode = new ListNode(gcd)
            p1.next = newNode
            newNode.next = p2
            curr = p2  
        }
        return head
    }
}
