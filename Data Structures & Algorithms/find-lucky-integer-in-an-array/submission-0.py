class Solution:
    def findLucky(self, arr: List[int]) -> int:
        freqTable = Counter(arr)
        maxValue = -1

        for num in arr:
            if num == freqTable[num]:
                maxValue = max(maxValue, num)
        return maxValue
        