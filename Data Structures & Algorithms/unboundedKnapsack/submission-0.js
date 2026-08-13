class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const dp = new Array(capacity + 1).fill(0);

        for (let i = 0; i < profit.length; i++) {
            for (let cap = weight[i]; cap <= capacity; cap++) {
                const pick = dp[cap];
                const skip = dp[cap - weight[i]] + profit[i]
                dp[cap] = Math.max(pick,skip)
            }
        }

        return dp[capacity]
    }
}
