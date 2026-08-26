class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Map()

        const dfs = (i) => {
            if (i <= 2) return i;
            if (dp.has(i)) return dp.get(i)

            let res = dfs(i - 1) + dfs(i - 2)
            dp.set(i,res)
            return res;
        }

        return dfs(n)
    }
}
