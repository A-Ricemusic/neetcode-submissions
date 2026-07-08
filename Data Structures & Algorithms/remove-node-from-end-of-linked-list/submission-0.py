# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head.next:
            return None
        prev = None
        curr = head
        while curr:
            tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        curr = prev
        dummy2 = ListNode()
        dummy2.next = curr
        prev = dummy2
        for i in range(n - 1):
            prev = prev.next
            curr = curr.next
        print(prev.val, curr.val)
        prev.next = curr.next
        curr.next = None
        curr = dummy2.next
        dummy2.next = None
        prev = None
        while curr:
            tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        return prev


        
        