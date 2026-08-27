class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const memo = new Map()
        const n = s.length;
        const dfs = (i) => {
            if (i >= n) return true;
            if (memo.has(i)) return memo.get(i);
            let res = false;

            for (const word of wordDict) {
                const len = word.length;
                if (s.substring(i,i + len) === word) {
                    res = res || dfs(i + len)
                }
            }
            memo.set(i,res)
            return res;
        }


        return dfs(0)
    }
}
