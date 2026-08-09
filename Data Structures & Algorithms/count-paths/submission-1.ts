class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        const rows: number = m;
        const cols: number = n;
        const dp: number[][] = Array.from({length: rows}, () => new Array(cols).fill(1));
        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < cols; c++) {
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1]
            }
        }
        return dp[rows - 1][cols - 1]
    }
}
