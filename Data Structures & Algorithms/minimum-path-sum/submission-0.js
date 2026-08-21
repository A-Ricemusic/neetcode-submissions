class Solution {
    minPathSum(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (r === 0 && c === 0) {
                    continue;
                } else if (r === 0) {
                    grid[r][c] += grid[r][c - 1];
                } else if (c === 0) {
                    grid[r][c] += grid[r - 1][c];
                } else {
                    grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
                }
            }
        }

        return grid[rows - 1][cols - 1];
    }
}
