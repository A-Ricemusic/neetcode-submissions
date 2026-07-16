"""
nums = [1,2,3,4,5,6,7,8], k = 4

1. [8,7,6,5,4,3,2,1]

2.)

"""


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def reverse(l,r):
            while l < r:
                nums[l], nums[r] = nums[r], nums[l]
                l += 1
                r -= 1
        
        k = k % len(nums)
        nums.reverse()
        reverse(0,k - 1)
        reverse(k,len(nums) - 1)
        