class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res = []
        l = 0
        res.append(max(nums[0:k]))
        for r in range(k, len(nums)):
            l += 1
            res.append(max(nums[l:r + 1]))
        return res
        