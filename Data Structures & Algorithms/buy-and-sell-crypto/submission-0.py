class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0
        currentPrice = prices[0]

        for i in range(1, len(prices)):
            if prices[i] < currentPrice:
                currentPrice = prices[i]
            else:
                maxProfit = max(maxProfit,(prices[i] - currentPrice))
        return maxProfit
        