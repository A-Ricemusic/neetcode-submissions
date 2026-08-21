class Solution {
    uniquePathsWithObstacles(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dp = Array.from({ length: m }, () => new Array(n).fill(0));
        if (grid[0][0] === 1) return 0;
        dp[0][0] = 1;
        for (let i = 1; i < n; i++) {
            if (grid[0][i] === 0 && dp[0][i - 1] === 1) {
                dp[0][i] = 1;
            } else {
                dp[0][i] = 0;
            }
        }

        for (let i = 1; i < m; i++) {
            if (grid[i][0] === 0 && dp[i - 1][0] === 1) {
                dp[i][0] = 1;
            } else {
                dp[i][0] = 0;
            }
        }

        for (let r = 1; r < m; r++) {
            for (let c = 1; c < n; c++) {
                if (grid[r][c] === 1) {
                    dp[r][c] = 0;
                } else {
                    dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
                }
            }
        }

        return dp[m - 1][n - 1];
    }
}
