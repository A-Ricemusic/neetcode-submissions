class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const dp = new Map();

        const dfs = (i, j) => {
            if (i >= s.length && j >= p.length) return true;
            if (j >= p.length) return false;
            const state = `${i},${j}`
            if (dp.has(state)) return dp.get(state)
            let firstMatch = i < s.length && (s[i] === p[j] || p[j] === ".");
            let res;
            if ((j + 1) < p.length && p[j + 1] === "*") {
               res = dfs(i, j + 2) || (firstMatch && dfs(i + 1,j))
            } else {
                res = firstMatch && dfs(i + 1,j + 1)
            }
            dp.set(state, res)
            return res
        }


        return dfs(0,0)

    }
}
