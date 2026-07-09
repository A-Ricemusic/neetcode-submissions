# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = curr = ListNode()
        carry = 0
        while l1 or l2:
            if l1 and not l2:
                amount = l1.val + carry
                carry = amount // 10
                currVal = amount - (carry * 10)
            elif l2 and not l1:
                amount = l2.val + carry
                carry = amount // 10
                currVal = amount - (carry * 10)
            else:
                amount = l1.val + l2.val + carry
                carry = amount // 10
                currVal = amount - (carry * 10)

            currNode = ListNode(currVal)
            curr.next = currNode
            curr = currNode
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        if carry != 0:
            currNode = ListNode(carry)
            curr.next = currNode
            curr = currNode

        return dummy.next
