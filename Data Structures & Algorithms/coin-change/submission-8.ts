class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) return 0
        const rows: number = coins.length;
        const cols: number = amount + 1;
        const dp: number[][] = Array.from({length: rows}, () => new Array(cols).fill(-1));

        const dfs = (i: number, curr: number): number => {
            if (curr === amount) return 0;
            if (i >= coins.length || curr > amount) return Infinity;
            if (dp[i][curr] !== -1) return dp[i][curr]

            const res = Math.min(dfs(i, curr + coins[i]) + 1, dfs(i + 1, curr))
            dp[i][curr] = res;
            return res
            
        }


        let res: number = dfs(0,0)
        return res === Infinity? -1 : res
    }
}
