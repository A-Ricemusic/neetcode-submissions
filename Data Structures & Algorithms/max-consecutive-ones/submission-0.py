class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count, maxCount = 0, 0
        for num in nums:
            if num == 1:
                count += 1
            else:
                maxCount = max(maxCount, count)
                count = 0
        return max(maxCount, count)
        