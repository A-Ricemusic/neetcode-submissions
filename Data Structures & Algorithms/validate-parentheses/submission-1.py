class Solution:
    def isValid(self, s: str) -> bool:
        myDict = {
            "[": "]",
            "(": ")",
            "{": "}"
        }
        stack = []
        for i in range(len(s)):
            if s[i] in myDict:
                stack.append(s[i])
                continue
            if len(stack) == 0:
                return False
            char = stack.pop()
            if myDict[char] == s[i]:
                continue
            else:
                return False
             
        return len(stack) == 0
        