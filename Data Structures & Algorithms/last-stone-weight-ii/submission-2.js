class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeightII(stones) {
        const total = stones.reduce((a,b) => a + b, 0);
        const target = Math.ceil(total / 2);
        const memo = new Map();
        const dfs = (i, curr) => {
            if (curr >= target || i >= stones.length) {
                return Math.abs(curr - (total - curr));
            }
            const state = `${i},${curr}`;
            if (memo.has(state)) return memo.get(state);

            const res = Math.min(dfs(i + 1, curr), dfs(i + 1, curr + stones[i]));
            memo.set(state, res);
            return res;
        }


        return dfs(0,0)
    }
}
