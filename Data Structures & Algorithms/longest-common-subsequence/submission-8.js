class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     *   c r a b t
     * c 3 2 2 1 1 0
     * a 2 2 2 1 1 0
     * t 1 1 1 1 1 0
     *   0 0 0 0 0 0
     */  
    longestCommonSubsequence(text1, text2) {
        const rows = text1.length;
        const cols = text2.length
        const dp = Array.from({length: rows + 1}, () => new Array(cols + 1).fill(0));

        for (let r = rows - 1; r >= 0; r--) {
            for (let c = cols - 1; c >= 0; c--) {
                if (text1[r] === text2[c]) {
                    dp[r][c] = dp[r + 1][c + 1] + 1;
                } else {
                    dp[r][c] = Math.max(dp[r + 1][c], dp[r][c + 1])
                }

            }
        }

        return dp[0][0]

    }
}
