class Solution {
    /**
     * @param {number[]} piles
     * @return {boolean}
     */
    stoneGame(piles) {
        const total = piles.reduce((a,x) => a + x, 0);
        const memo = new Map();

        const dfs = (i,j) => {
            if (i > j) {
                return 0
            }
            const state = `${i},${j}`
            if (memo.has(state)) return memo.get(state)
            const c1 = dfs(i + 2, j) + piles[i]
            const c2 = dfs(i,j - 2) + piles[j]
            const c3 = dfs(i + 1, j - 1) + piles[i]
            const c4 = dfs(i + 1, j - 1) + piles[j]
            const res = Math.max(c1,c2,c3,c4)
            memo.set(state, res);
            return res;
        }

        const alice = dfs(0, piles.length - 1)
        return alice > total - alice
    }
}
