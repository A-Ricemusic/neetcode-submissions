class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            m = (l + r) // 2
            if m == 0 and nums[m] <= nums[-1]:
                return nums[m]
            if nums[m] < nums[m - 1]:
                return nums[m]
            if nums[m] > nums[-1]:
                l = m + 1
            else:
                r = m - 1

        