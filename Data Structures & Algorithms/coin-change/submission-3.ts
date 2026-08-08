class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        let memo: Record<number,number> = {};

        const dfs = (amt) => {
            if (amt === 0) return 0;
            if (amt in memo) return memo[amt]
            let res: number = Infinity;
            for (let coin of coins) {
                if (amt - coin >= 0) {
                    res = Math.min(res, 1 + dfs(amt - coin))
                }
            }
            memo[amt] = res
            return res 
        }
        const minCoins = dfs(amount)
        return minCoins === Infinity? -1 : minCoins
    }
}
