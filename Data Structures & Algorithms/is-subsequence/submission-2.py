class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t):
            return False
        if len(s) == 0:
            return True
        p1 = 0
        for p2 in range(len(t)):
            if t[p2] == s[p1]:
                p1 += 1
            if p1 == len(s):
                break
        return p1 == len(s)
        