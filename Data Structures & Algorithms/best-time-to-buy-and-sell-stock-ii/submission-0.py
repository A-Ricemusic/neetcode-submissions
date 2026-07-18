"""
[7,1,5,6,2,2]




"""


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        curr = prices[0]

        for i in range(1, len(prices)):
            if prices[i] < curr:
                curr = prices[i]
            elif prices[i] > curr:
                profit += prices[i] - curr
                curr = prices[i]

        return profit

        