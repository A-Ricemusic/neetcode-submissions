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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     * 
     * 
     * [1   4 <- 3 <- 7 <- 6  8]
     * 
     * left = 2, right = 5
     * leftPrev = 1 || (could be null), LeftNode= 4, rightNode = 6   
     * rightNext = 8 (could be null)
     * 
     * 
     */


    
    reverseBetween(
        head: ListNode | null,
        left: number,
        right: number,
    ): ListNode {

        if (!head || left === right) {
            return head
        }

        let leftNode: ListNode = head;
        let rightNode: ListNode = head;
        let leftPrev: ListNode = null;
        let rightNext: ListNode = head;
        let dummy: ListNode = new ListNode(0);


        // gets left pointers
        if (left !== 1) {
            let leftIdx: number = 1
            while (leftIdx !== left) {
                leftPrev = leftNode
                leftNode = leftNode.next
                leftIdx++
            }
        }

        //get right pointers
        let rightIdx: number = 1;
        while (rightIdx != right) {
            rightNode = rightNode.next;
            rightIdx++;
        }

        rightNext = rightNode.next;

        if (leftPrev !== null) {
            leftPrev.next = null;
        }
        rightNode.next = null;

        let curr: ListNode = leftNode;
        let prev: ListNode | null = null;

        while (curr !== null) {
            const tmp: ListNode = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }
        console.log(prev.val)
        curr = prev

        while (curr.next !== null) {
            curr = curr.next
        }

        

        if (leftPrev === null) {
            dummy.next = prev
        } else {
            dummy.next = head
            leftPrev.next = prev
        }

        

        curr.next = rightNext

        

        return dummy.next
    
    }
}
