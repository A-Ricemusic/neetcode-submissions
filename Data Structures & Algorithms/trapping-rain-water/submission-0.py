class Solution:
    def trap(self, height: List[int]) -> int:
        maxLeftArr = [0] * len(height)
        maxRightArr = [0] * len(height)
        maxLeft, maxRight = 0,0
        result = 0

        for i in range(1, len(height)):
            maxLeft = max(maxLeft, height[i - 1])
            maxLeftArr[i] = maxLeft
        
        for i in range(len(height) - 2, -1, -1):
            maxRight = max(maxRight, height[i + 1])
            maxRightArr[i] = maxRight
        
        for i in range(len(height)):
            result += max(min(maxLeftArr[i],maxRightArr[i]) - height[i],0)
        return result



        