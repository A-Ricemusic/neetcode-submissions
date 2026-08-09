class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const dp: number[] = new Array(amount + 1).fill(-1);

        const dfs = (amt) => {
            if (amt <= 0) return 0;
            if (dp[amt] !== -1) return dp[amt];
            let res: number = Infinity;
            for (const coin of coins) {
                if (amt - coin >= 0) {
                    res = Math.min(res, dfs(amt - coin) + 1);
                }
            }
            dp[amt] = res
            return res
        }


        const minCoins: number = dfs(amount)
        return minCoins === Infinity? -1 : minCoins
    }
}
