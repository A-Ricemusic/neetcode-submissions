class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number}
     * 
     * 
     * time: o(n * k)
     * space: o(n) + o(n * k)
     */
    numWays(n, k) {
        const memo = new Map()

        const dfs = (count, streak) => {
            if (count === n) {
                return 1;
            }
            const state = `${count},${streak}`
            if (memo.has(state)) return memo.get(state)
            let res = 0;
            if (count === 0) {
                res += k * dfs(count + 1, streak + 1)
            } else if (streak === 1) {
                res += dfs(count + 1, streak + 1)
                res += (k - 1) * dfs(count + 1, streak)
            } else {
                res += (k - 1) * dfs(count + 1, 1)
            }
            memo.set(state, res)
            return res;
        }

        return dfs(0,0)

    }
}
