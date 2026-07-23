"""
nums = [1,2,3]

res = 3

1 - 3 = -2, res = 1
2 - 3 = -1, res = 0



"""


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        res = len(nums)

        for i in range(len(nums)):
            res += (i - nums[i])

        return res
        