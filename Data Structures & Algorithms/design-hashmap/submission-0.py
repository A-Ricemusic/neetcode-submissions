class MyHashMap:

    def __init__(self):
        self.keys = []
        self.vals = []
        

    def put(self, key: int, value: int) -> None:
        for idx, k in enumerate(self.keys):
            if k == key:
                self.vals[idx] = value
                return
        self.keys.append(key)
        self.vals.append(value)
        

    def get(self, key: int) -> int:
        for idx, k in enumerate(self.keys):
            if k == key:
                return self.vals[idx]
        return -1
                
    
    def remove(self, key: int) -> None:
        i = -1
        for idx, k in enumerate(self.keys):
            if k == key:
                i = idx
        if i != -1:
            self.keys.pop(i)
            self.vals.pop(i)
        


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)