class MyHashSet:

    def __init__(self):
        self.arr = []
        

    def add(self, key: int) -> None:
        for num in self.arr:
            if num == key:
                return
        self.arr.append(key)
        

    def remove(self, key: int) -> None:
        i = -1
        for idx, num in enumerate(self.arr):
            if num == key:
                i = idx
                break
        if i != -1:
            self.arr.pop(i)

        

    def contains(self, key: int) -> bool:
        for num in self.arr:
            if num == key:
                return True
        return False
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)