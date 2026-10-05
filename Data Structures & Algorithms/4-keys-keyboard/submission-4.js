class Solution {
    /**
     * @param {number} n
     * @return {number}
     * 0 is false; 1 is true
     */
    maxA(n) {
        const memo = new Map();
        const dfs = (strokeCount, ) => {
            if (strokeCount > n) return 0;
            if (strokeCount === n) return 1;
            const state = `${strokeCount}`;
            if (memo.has(state)) return memo.get(state);
            let res = 1
            let cnt = 2
            for (let i = strokeCount + 3; i <= n; i++) {
                res = Math.max(res, dfs(i) * cnt);
                cnt++;
            }

            memo.set(state,res);
            return res;
        }

        let final = 0;
        for (let i = 1; i <= n; i++) {
            final = Math.max(final, i * dfs(i))
        }
        return final;
    }
}
