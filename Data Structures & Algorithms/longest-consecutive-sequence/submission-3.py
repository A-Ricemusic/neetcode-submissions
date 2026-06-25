class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:

        if len(nums) == 0:
            return 0
        minimum = min(nums)
        maximum = max(nums)
        cache = {}
        for i in range(minimum,maximum + 1):
            cache[i] = 0
        result, curr = 0, 0

        for num in nums:
            cache[num] += 1


        vals = list(cache.values())
        for num in vals:
            if num > 0:
                curr += 1
            else:
                result = max(result, curr)
                curr = 0

        return max(result, curr)
        