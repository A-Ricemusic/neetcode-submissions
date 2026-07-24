class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit: number = 0;
        let curr: number = prices[0];

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < curr) {
                curr = prices[i] 
            } else if (prices[i] > curr){
                maxProfit = Math.max(maxProfit,prices[i] - curr)
            }
        }

        return maxProfit
    }
}
