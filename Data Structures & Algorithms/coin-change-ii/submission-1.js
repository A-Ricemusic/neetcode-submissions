class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     * amount = 4, coins = [1,2,3]
      dfs(0,4) => dfs(0,3), dfs(1,4)
      dfs(0,3) => dfs(0,2), dfs(1,3)
      dfs(0,2) => dfs(0,1), dfs(2,3)
      dfs(0,1)
      dfs(1,4) => dfs(1,2), dfs(2,4)
     */
    change(amount, coins) {
        const memo = new Map();

        const dfs = (i,amt) => {
            if (amt === 0) return 1;
            if (amt < 0 || i >= coins.length) return 0;
            const state = `${i},${amt}`
            if (memo.has(state)) return memo.get(state);
            const c1 = dfs(i, amt - coins[i]);
            const c2 = dfs(i + 1,amt);
            memo.set(state, c1 + c2)
            return c1 + c2;
        }
        return dfs(0,amount)

    }
}
