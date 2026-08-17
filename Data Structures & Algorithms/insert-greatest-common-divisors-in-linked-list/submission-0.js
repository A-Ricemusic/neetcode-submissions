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
        const biggerNum = Math.max(num1,num2);
        const smallerNum = Math.min(num1, num2);
        for (let i = smallerNum; i >= 1; i--) {
            if (biggerNum % i == 0 && smallerNum % i === 0) {
                return i;
            }
        }
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
