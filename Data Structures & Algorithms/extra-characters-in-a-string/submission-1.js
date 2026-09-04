class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const memo = new Map();
        const n = s.length;
        const dfs = (i) => {
            if (i >= s.length) return 0;
            if (memo.has(i)) return memo.get(i);
            let res = n - i;
            for (const word of dictionary) {
                const wordLen = word.length;
                if (i + wordLen > n) continue;
                const substring = s.substring(i, i + wordLen);
                if (substring === word) {
                    res = Math.min(res, dfs(i + wordLen))
                }
            }
            res = Math.min(res, dfs(i + 1) + 1)

            memo.set(i, res)
            return res;
        }

        return dfs(0)
    }
}
