class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s) or t == "":
            return ""
        window = {}
        countT = Counter(t)
        res, resLen = [-1,-1], float("inf")
        have, need = 0 ,len(countT)
        l = 0
        for r, char in enumerate(s):
            window[char] = 1 + window.get(char, 0)
            if window[char] == countT[char]:
                have += 1
            while have == need:
                if (r - l + 1) < resLen:
                    resLen = r - l + 1
                    res = [l,r]
                window[s[l]] -= 1
                if window[s[l]] < countT[s[l]]:
                    have -= 1
                l += 1
        return s[res[0]:(res[1] + 1)] if resLen != float("inf") else ""
        