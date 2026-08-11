class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        if (!grid.length || !grid[0].length) return 0;
        const rows = grid.length;
        const cols = grid[0].length;
        const dp = new Array(cols).fill(0)
        dp[0] = grid[0][0] === 1? 0: 1

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    dp[c] = 0
                } else if (c > 0) {
                    dp[c] += dp[c - 1]
                }
            }
        }
        return dp[cols - 1]
    }
}
