class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        const rows: number = text1.length;
        const cols: number = text2.length;
        const dp: number[][] = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
        for (let r = rows - 1; r >= 0; r--) {
            for (let c = cols - 1; c >= 0; c--) {
                if (text1[r] === text2[c]) {
                    dp[r][c] = 1 + dp[r + 1][c + 1];
                } else {
                    dp[r][c] = Math.max(dp[r + 1][c], dp[r][c + 1]);
                }
            }
        }

        return dp[0][0];
    }
}
