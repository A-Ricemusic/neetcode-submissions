class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const dp: (boolean | null)[] = new Array(s.length).fill(null)

        const dfs = (i: number): boolean => {
            if (i === s.length) return true;
            if (dp[i] !== null) return dp[i]
            let res: boolean = false;
            for (const word of wordDict) {
                const subString: string = s.substring(i,i + word.length)
                if (subString === word) {
                    res = dfs(i + word.length) || res
                }
            }
            dp[i] = res
            return res;
        }


        return dfs(0)
    }
}
