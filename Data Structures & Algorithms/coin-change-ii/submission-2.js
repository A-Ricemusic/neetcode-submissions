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
        const dp = Array.from({length: n + 1}, () => new Array(m + 1).fill(0));
        for (let i = n - 1; i >= 0; i--) {
            dp[i][0] = 1
            for (let j = 1; j <= m; j++) {
                const c1 = j - coins[i] >= 0? dp[i][j - coins[i]] : 0;
                const c2 = dp[i + 1][j]
                dp[i][j] = c1 + c2
            }
        }

        return dp[0][amount]
    }
}
