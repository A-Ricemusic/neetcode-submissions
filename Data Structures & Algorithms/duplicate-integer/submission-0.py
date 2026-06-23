class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        cache = {}
        for idx,num in enumerate(nums):
            if num in cache:
                return True
            else:
                cache[num] = idx
        return False
        