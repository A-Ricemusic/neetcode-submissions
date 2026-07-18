class MyQueue:

    def __init__(self):
        self.stack1 = [] # (number, front of queue)
        self.stack2 = []

    def push(self, x: int) -> None:
        if len(self.stack1) == 0:
            self.stack1.append((x , x))
        else:
            frontOfQueue = self.stack1[-1][1]
            self.stack1.append((x,frontOfQueue))
        
    def pop(self) -> int:
        print(self.stack1)
        while self.stack1:
            x, y = self.stack1.pop()
            self.stack2.append((x,y))
        num1, num2 = self.stack2.pop()
        if self.stack2:
            newFront = self.stack2[-1][0]
        while self.stack2:
            x, y = self.stack2.pop()
            self.stack1.append((x,newFront))
        
        return num1

        

    def peek(self) -> int:
        return self.stack1[-1][1]
        

    def empty(self) -> bool:
        return len(self.stack1) == 0
        


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()