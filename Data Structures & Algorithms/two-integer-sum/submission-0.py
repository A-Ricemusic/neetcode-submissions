class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        cache = {}
        for idx, num in enumerate(nums):
            comp = target - num
            if comp in cache:
                return [cache[comp], idx]
            else:
                cache[num] = idx
        return [-1]