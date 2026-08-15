class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const n = text1.length;
        const m = text2.length;
        let dp = new Array(m + 1).fill(0)

        for (let i = 0; i < n; i++) {
            let currRow = new Array(m + 1).fill(0)
            for (let j = 0; j < m; j++) {
                if (text1[i] === text2[j]) {
                    currRow[j + 1] = 1 + dp[j]
                } else {
                    currRow[j + 1] = Math.max(dp[j + 1], currRow[j])
                }
                
            }
            dp = currRow
        }

        return dp[m]
    }
}
