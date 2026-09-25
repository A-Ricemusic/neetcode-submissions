class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     *  text1 = "cat", text2 = "crabt" 
     * i = 1, j = 1
     * [
     *    c a t
     * c [0,0,0,0]
     * r [0,0,0,0]
     * a [0,0,0,0]
     * b [0,2,1,0]
     * t [1,1,1,0]
     *   [0,0,0,0]
     * ]
     * 
     */
    longestCommonSubsequence(text1, text2) {
        const n = text1.length; //rows
        const m = text2.length; //cols
        const dp = Array.from({length: n + 1}, () => new Array(m + 1).fill(0));
        for (let i = n - 1; i >= 0; i--) {
            for (let j = m - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    dp[i][j] = 1 + dp[i + 1][j + 1]
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
                }
            }
        }

        return dp[0][0]
    }
}
