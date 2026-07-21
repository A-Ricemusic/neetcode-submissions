class Solution:
    def isPal(self, s1):
            l, r = 0, len(s1) - 1

            while l < r:
                if s1[l] != s1[r]:
                    return False
                l += 1
                r -= 1
            return True
        
    def countSubstrings(self, s: str) -> int:
        res = []

        for i in range(len(s)):
            for j in range(i, len(s)):
                if self.isPal(s[i:j + 1]):
                    res.append(s[i:j + 1])
        return len(res)
        