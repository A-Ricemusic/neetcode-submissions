class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let res: number = 0;
        let rows: number = grid.length;
        let cols: number = grid[0].length;
        const dfs = (r: number, c: number, area: number) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;
            return (
                1 +
                dfs(1 + r, c, area + 1) +
                dfs(r - 1, c, area + 1) +
                dfs(r, c + 1, area + 1) +
                dfs(r, c - 1, area + 1)
            );
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    const currArea: number = dfs(r, c, 1);
                    res = Math.max(res, currArea);
                }
            }
        }

        return res;
    }
}
