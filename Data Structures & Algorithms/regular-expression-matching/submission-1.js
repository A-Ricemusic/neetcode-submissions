class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     * s = "aa", 
     * p = "a*b*"
     */
    isMatch(s, p) {
        const memo = new Map();

        const dfs = (i,j) => {
            const state = `${i},${j}`
            if (memo.has(state)) return memo.get(state);
            if (i >= s.length && j >= p.length) return true;
            if (j >= p.length) return false;
            const match = (i < s.length && (s[i] === p[j] || p[j] === "."));

            if (j + 1 < p.length && p[j + 1] == "*") {
                const res = (dfs(i, j + 2) || (match && dfs(i + 1,j)))
                memo.set(state,res)
                return memo.get(state);
            }

            if (match) {
                memo.set(state, dfs(i + 1, j + 1));
                return memo.get(state);
            }

            memo.set(state, false);
            return false;
        }


        return dfs(0,0)
    }
}
