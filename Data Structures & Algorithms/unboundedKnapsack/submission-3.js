class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const memo = new Map()
        const n = profit.length

        const dfs  = (i,cap) => {
            if (i >= n) return 0;
            const key = `${i},${cap}`;
            if (memo.has(key)) return memo.get(key);
            const skip = dfs(i + 1, cap)
            let pick = -Infinity
            if (weight[i] + cap <= capacity) {
                pick = dfs(i, cap + weight[i]) + profit[i]
            }
            const res = Math.max(pick,skip)
            memo.set(key, res)
            return res

        }



        return dfs(0,0)
    }
}
