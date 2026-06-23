class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        for idx, num in enumerate(nums):
            if idx == 0:
                continue
            if nums[idx - 1] == num:
                return True
        return False
