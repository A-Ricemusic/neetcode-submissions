class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        myDict = Counter(nums)
        s = len(nums) / 3
        res = []

        for num in myDict.keys():
            if myDict[num] > s:
                res.append(num)
        
        return res
        