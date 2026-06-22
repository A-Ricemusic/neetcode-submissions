class Node:
    def __init__(self, val : int, n: Node):
        self.val = val
        self.next = n



class LinkedList:
    
    def __init__(self):
        self.head = Node(None, None)
        
    
    def get(self, index: int) -> int:
        node = self.head.next
        count = 0
        while node != None and count < index:
            node = node.next
            count += 1
        if node == None:
            return -1
        else:
            return node.val
        
        

    def insertHead(self, val: int) -> None:
        newHead = Node(val, self.head.next)
        self.head.next = newHead

        
    def insertTail(self, val: int) -> None:
        newTail = Node(val, None)
        node = self.head
        while node.next != None:
            node = node.next
        node.next = newTail
        

    def remove(self, index: int) -> bool:
        curr = self.head
        for _ in range(index):
            if curr == None or curr.next == None:
                return False
            curr = curr.next
        if curr.next == None:
            return False
        curr.next = curr.next.next
        return True
        

        

    def getValues(self) -> List[int]:
        arr = []
        node = self.head.next
        while node != None:
            arr.append(node.val)
            node = node.next
        return arr
        
