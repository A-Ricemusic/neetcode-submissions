class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     * amount = 4, coins = [1,2,3]
        0,1,2,3,4 (amt)
   (1)0 1 1 2 3 4
   (2)1 1 0 1 1 1
   (3)2 1 0 0 1 0
   (n)3 1 0 0 0 0
     (i)
     */
    change(amount, coins) {
        const n = coins.length;
        const m = amount;
        let dp = new Array(m + 1).fill(0);
        dp[0] = 1
        for (let i = n - 1; i >= 0; i--) {
            for (let j = 1; j <= m; j++) {
                dp[j] = j - coins[i] >= 0? dp[j - coins[i]] + dp[j] : dp[j];
            }
        }

        return dp[amount]
    }
}
