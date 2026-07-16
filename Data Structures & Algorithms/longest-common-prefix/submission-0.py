"""
["bat","bag","bank","band"]



"""


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = []
        minString = ""
        minStringLen = 201

        for s in strs:
            minStringLen = min(len(s), minStringLen)
            minString = s
        for i in range(minStringLen):
            for s in strs:
                if s[i] != minString[i]:
                    return "".join(res)
            res.append(minString[i])



        return "".join(res)
        

        