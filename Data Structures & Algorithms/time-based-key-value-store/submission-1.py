class TimeMap:

    def __init__(self):
        self.timeMap = {}
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.timeMap:
            self.timeMap[key] = {timestamp: value}
            return
        self.timeMap[key][timestamp] = value

        

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.timeMap:
            return ""
        myDict = self.timeMap[key]
        for i in range(timestamp, -1, -1):
            if i in myDict:
                return myDict[i]
        return ""
        
