class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r, maxArea = 0,len(heights) - 1, 0

        while l < r:
            currHeight = min(heights[l], heights[r])
            currArea = (r - l) * currHeight
            maxArea = max(currArea, maxArea)
            if heights[l] < heights[r]:
                l += 1
            else:
                r -= 1
        return maxArea

        