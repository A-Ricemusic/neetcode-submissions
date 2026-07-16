class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        myDict = Counter(nums)
        keys = myDict.keys()

        maxValue = 0
        maxValueCount = 0

        for k in keys:
            if myDict[k] > maxValueCount:
                maxValueCount = myDict[k]
                maxValue = k
        return maxValue 
        