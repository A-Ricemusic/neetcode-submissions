class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     *    00 01 02 03 04 05 06 07 08
     * 0 [00,00,00,00,00,04,04,04,04]
     * 1 [00,00,04,04,04,04,04,08,08]
     * 2 [00,00,00,07,07,11,11,11,11]
     * 3 [00,01,01,07,08,11,12,12,12]
     */
    maximumProfit(profit, weight, capacity) {
        let dp = new Array(capacity + 1).fill(0);
        for (let i = 0; i < weight.length; i++) {
            for (let j = capacity; j >= weight[i]; j--) {
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + profit[i])
            }
        }
        return dp[capacity];
    }
}
