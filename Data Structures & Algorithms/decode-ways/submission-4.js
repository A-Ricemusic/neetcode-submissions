class Solution {
    /**
     * @param {string} s
     * @return {number}
     * s: 1032
     * dfs(0) => dfs(1) + dfs(2) => 0 + 1
     * dfs(1) => 0
     * dfs(2) => dfs(3) = 1
     * dfs(3) => dfs(4) = 1
     */
    numDecodings(s) {
        const memo = new Map()

        const dfs = (i) => {
            if (i >= s.length) return 1;
            if (s[i] === "0") return 0;
            if (memo.has(i)) return memo.get(i);
            let res = dfs(i + 1);
            if (i !== s.length - 1 && parseInt(s.substring(i, i + 2)) <= 26) {
                res += dfs(i + 2)
            }
            memo.set(i, res);
            return res;
        }

        return dfs(0);
        
    }
}
