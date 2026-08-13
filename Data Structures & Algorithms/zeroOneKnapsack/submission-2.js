class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const dp = new Array(capacity + 1).fill(0)

        for (let i = 0; i < profit.length; i++) {
            for (let cap = capacity; cap >= weight[i]; cap--) {
                dp[cap] = Math.max(dp[cap], dp[cap - weight[i]] + profit[i])
            }
        }

        return dp[capacity]
    }
}
