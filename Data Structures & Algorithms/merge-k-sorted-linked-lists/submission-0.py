# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        myList = []
        i = 0
        while i < len(lists):
            curr = lists[i]
            while curr:
                myList.append((curr, curr.val))
                curr = curr.next
            i += 1
        myList.sort(key = lambda x: x[1])
        for i in range(1, len(myList)):
            myList[i - 1][0].next = myList[i][0]

        if not lists or lists[0] == []:
            return None        
        return myList[0][0]
        