class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     *    00 01 02 03 04 05 06 07 08
     * 0 [00,00,00,00,00,04,04,04,04]
     * 1 [00,00,04,04,04,08,08,08,08]
     * 2 [00,00,04,11,11,00,00,00,00]
     * 3 [00,00,00,00,00,00,00,00,00]
     */
    maximumProfit(profit, weight, capacity) {
        const memo = new Map();
        const n = profit.length;
        const dfs = (i,cap) => {
            if (i >= n) return 0;
            const state = `${i},${cap}`;
            if (memo.has(state)) return memo.get(state);
            let res = dfs(i + 1, cap);
            if (cap + weight[i] <= capacity) {
                res = Math.max(res, dfs(i + 1, cap + weight[i]) + profit[i])
            }
            memo.set(state, res);
            return res;
        }


        return dfs(0,0)
    }
}
