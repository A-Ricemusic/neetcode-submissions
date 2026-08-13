class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     */
    maximumProfit(profit, weight, capacity) {
        const memo = new Map()
        const dfs = (i, cap) => {
            
            if (i >= profit.length) return 0;
            const key = `${i},${cap}`
            if (memo.has(key)) return memo.get(key);
            const skip = dfs(i + 1,cap);
            let pick = -Infinity;
            if (cap >= weight[i]) {
                pick = dfs(i + 1, cap - weight[i]) + profit[i];
            }
            const res = Math.max(skip,pick);
            memo.set(key,res);
            return res;

        }


        return dfs(0,capacity)

    }
}
