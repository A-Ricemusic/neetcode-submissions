class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     * [[0,1,0],[0,1,0],[0,1,0]]
     * [
     *  [1,0,0]
     *  [1,0,0]
     *  [1,0,0]
     * 
     * ]
     */
    uniquePathsWithObstacles(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const dp = Array.from({length: rows}, () => new Array(cols).fill(0));
        if (grid[0][0] === 1) return 0;
        dp[0][0] = 1;

        for (let c = 1; c < cols; c++) {
            dp[0][c] = grid[0][c] === 1? 0 : dp[0][c - 1]
        };

        for (let r = 1; r < rows; r++) {
            dp[r][0] = grid[r][0] === 1? 0 : dp[r - 1][0];
        };

        for (let r = 1; r < rows; r++) {
            for (let c = 1; c < cols; c++) {
                dp[r][c] = grid[r][c] === 1? 0 : dp[r - 1][c] + dp[r][c - 1];
            }
        }

        return dp[rows - 1][cols - 1]
    }
}
