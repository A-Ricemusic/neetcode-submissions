class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        memo = {}

        def dfs(i):
            if i in memo:
                return memo[i]
            
            best = 1
            for j in range(i + 1, len(nums)):
                if nums[i] < nums[j]:
                    best = max(best, 1 + dfs(j))
            
            memo[i] = best
            return best
        
        return max(dfs(i) for i in range(len(nums)))
        