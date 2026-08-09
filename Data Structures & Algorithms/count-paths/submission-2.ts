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

        for (let r = rows - 2; r >= 0; r--) {
            for (let c = cols - 2; c >= 0; c--) {
                dp[r][c] = dp[r + 1][c] + dp[r][c + 1]
            }
        }

        return dp[0][0]

    }
}
