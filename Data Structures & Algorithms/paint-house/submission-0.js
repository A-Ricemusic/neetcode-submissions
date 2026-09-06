class Solution {
    /**
     * @param {number[][]} costs
     * @return {number}
     * index 0: red
     * index 1: green
     * index 2: blue
     */
    minCost(costs) {
        const memo = new Map();
        const n = costs.length;
        const dfs = (i, prev) => {
            if (i >= n) return 0;
            const state = `${i},${prev}`;
            if (memo.has(state)) return memo.get(state);
            let res = Infinity;
            if (prev === -1) {
                res = Math.min(
                    dfs(i + 1, 0) + costs[i][0], 
                    dfs(i + 1, 1) + costs[i][1], 
                    dfs(i + 1, 2) + costs[i][2], 
                );
            } else if (prev === 0) {
                res = Math.min(
                    dfs(i + 1, 1) + costs[i][1], 
                    dfs(i + 1, 2) + costs[i][2], 
                );
            } else if (prev === 1) {
                res = Math.min(
                    dfs(i + 1, 0) + costs[i][0], 
                    dfs(i + 1, 2) + costs[i][2], 
                );

            } else if (prev === 2) {
                res = Math.min(
                    dfs(i + 1, 0) + costs[i][0], 
                    dfs(i + 1, 1) + costs[i][1], 
                );
            };

            memo.set(state, res)
            return res;
        };

        return dfs(0,-1)
    }
}
