class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * time: O(n^3)
     * space: O(n)
     */
    checkValidString(s) {
        const memo = new Map();
        const dfs = (i, open) => {
            if (i >= s.length && open === 0) return true;
            if (open < 0 || i >= s.length) return false;
            const state = `${i},${open}`;
            if (memo.has(state)) return memo.get(state);
            let res;
            if (s[i] === "(") {
                res = dfs(i + 1, open + 1);
            } else if (s[i] === ")") {
                res = dfs(i + 1, open - 1);
            } else {
                res = dfs(i + 1, open + 1) || dfs(i + 1, open - 1) || dfs(i + 1, open)
            };

            memo.set(state, res);
            return res;
        }

        return dfs(0,0)
    }
}
