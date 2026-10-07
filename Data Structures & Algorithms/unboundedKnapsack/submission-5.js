class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        let n = weight.length;
        const dp = new Array(capacity + 1).fill(0)
        for (let i = 0; i < n; i++) {
            for (let j = weight[i]; j <= capacity; j++) {
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + profit[i])
            }
        }

        return dp[capacity];



        const memo = new Map();
        const dfs = function(i,cap) {
            if (i >= weight.length) return 0;
            const state = `${i},${cap}`;
            if (memo.has(state)) return memo.get(state);
            let res = dfs(i + 1,cap);
            if (weight[i] + cap <= capacity) {
                res = Math.max(res, dfs(i,cap + weight[i]) + profit[i]);
            }
            memo.set(state, res);
            return res;
        }


        return dfs(0,0)
    }
}
