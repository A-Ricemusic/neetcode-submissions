class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        const dp: number[][] = Array.from({length: coins.length}, () => new Array(amount + 1).fill(-1));

        const dfs = (i: number, amt: number): number => {
            if (amt === amount) return 1;
            if (i >= coins.length || amt > amount) return 0;
            if (dp[i][amt] !== -1) return dp[i][amt];
            const res: number = dfs(i, amt + coins[i]) + dfs(i + 1, amt)
            dp[i][amt] = res
            return res
        
        }

        return dfs(0,0)
        
    }
}
