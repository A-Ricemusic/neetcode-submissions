class Solution {
    /**
     * @param {<Array<number>} profit
     * @param {<Array<number>} weight
     * @param {number} capacity
     * @returns {number}
     *    00 01 02 03 04 05 06 07 08
     * 0 [00,00,00,00,00,04,04,04,04]
     * 1 [00,00,04,04,04,08,08,08,06]
     * 2 [00,00,00,00,00,00,00,00,00]
     * 3 [00,00,00,00,00,00,00,00,00]
     */
    maximumProfit(profit, weight, capacity) {

        const memo = new Map()


        const dfs = function(i,cap) {
            if (i >= weight.length) return 0;
            const state = `${i},${cap}`;
            if (memo.has(state)) return memo.get(state);
            let res = dfs(i + 1, cap);
            if (cap + weight[i] <= capacity) {
                res = Math.max(res, dfs(i + 1, weight[i] + cap) + profit[i]);
            }

            memo.set(state,res);
            return res;
        };
        return dfs(0,0)
        
    }
}
