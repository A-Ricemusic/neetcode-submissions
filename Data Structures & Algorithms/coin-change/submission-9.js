class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     * 
     * 
     * dfs(0) => dfs(1), dfs(5), dfs(10) => 3
     * dfs(1) => dfs(2), dfs(6), dfs(11)
     * dfs(2) => dfs(3), dfs(8), dfs(12)
     * dfs(3) => dfs(4), dfs(9), dfs(13)
     * dfs(4) => dfs(5), dfs(10), dfs(14)
     * dfs(5) => dfs(6) dfs(10)   dfs(15) => 3
     * dfs(6) => dfs(7) dfs(11)   dfs(15) => 2
     * dfs(7) => dfs(8) dfs(12)   dfs(15) => 1
     * dfs(8) => dfs(9) dfs(13)   dfs(15) => 4 
     * dfs(9) => dfs(10) dfs(13)   dfs(15) => 3
     * dfs(10) => dfs(11) dfs(13)   dfs(15) => 2 
     * dfs(11) => dfs(12) dfs(13)   dfs(15) => 1
     * dfs(12) => 0
     */
    coinChange(coins, amount) {
        const memo = new Map()
        const dfs = (amt) => {
            if (amt > amount) return Infinity;
            if (amt === amount) return 0;
            if (memo.has(amt)) return memo.get(amt);
            let res = Infinity
            for (const c of coins) {
                res = Math.min(res, dfs(amt + c) + 1)
            }
            memo.set(amt, res);
            return res;
        }


        let res = dfs(0)

        return res === Infinity? -1 : res
    }
}
