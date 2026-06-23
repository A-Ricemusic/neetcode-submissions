class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        freqCount = []
        result = []
        mySet = set()
        for s in strs:
            freqCount.append(Counter(s))

        for i, counter1 in enumerate(freqCount):
            if i in mySet:
                continue
            curr = []
            curr.append(strs[i])
            mySet.add(i)
            for j, counter2 in enumerate(freqCount):
                if j in mySet:
                    continue
                if counter1 == counter2:
                    curr.append(strs[j])
                    mySet.add(j)
            result.append(curr)
        return result

        