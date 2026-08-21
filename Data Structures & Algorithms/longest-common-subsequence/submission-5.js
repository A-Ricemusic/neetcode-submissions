class Solution {
    longestCommonSubsequence(text1, text2) {
        const rows = text1.length;
        const cols = text2.length;
        const dp = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
        for (let r = 1; r <= rows; r++) {
            for (let c = 1; c <= cols; c++) {
                if (text1[r - 1] === text2[c - 1]) {
                    dp[r][c] = dp[r - 1][c - 1] + 1;
                } else {
                    dp[r][c] = Math.max(dp[r][c - 1], dp[r - 1][c]);
                }
            }
        }
        return dp[rows][cols];
    }
}
