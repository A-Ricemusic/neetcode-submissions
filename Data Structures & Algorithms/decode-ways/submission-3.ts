class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 12785
     */
    numDecodings(s: string): number {

        const dp: number[] = new Array(s.length).fill(0);
        const dfs = (i: number): number => {
            if (i >= s.length) {
                return 1
            }
            if (dp[i] !== 0) {
                return dp[i]
            }
            let count1: number = 0
            let count2: number = 0
            if (!(parseInt(s[i]) === 0)) {
                count1 = dfs(i + 1)
            }
            if (!(parseInt(s[i]) === 0) && parseInt(s[i] + s[i + 1]) < 27 && i + 1 < s.length) {
                count2 = dfs(i + 2)
            }
            dp[i] = count1 + count2 
            return dp[i]
        }

        dfs(0)        
        return dp[0]
        
    }
}
