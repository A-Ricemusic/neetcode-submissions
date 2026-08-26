class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     * cost = [1,2,1,2,1,1,1]
     *   dp = [1,2,2,4,3,4,4] 
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        const dp = new Array(n).fill(0);
        dp[0] = cost[0];
        dp[1] = cost[1];
        for (let i = 2; i < n; i++) {
            dp[i] = cost[i] + Math.min(dp[i - 1],dp[i - 2])
        }
        return Math.min(dp[n - 1], dp[n - 2])
    }
}
