class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        mySet = set()
        maxCount, count = 0, 0

        if len(s) == 0:
            return 0

        for i in range(len(s)):
            for j in range(i, len(s)):
                if s[j] in mySet:
                    maxCount = max(maxCount,count)
                    mySet = set()
                    count = 0
                    break
                else:
                    mySet.add(s[j])
                    count+=1
        return max(maxCount,count)

        