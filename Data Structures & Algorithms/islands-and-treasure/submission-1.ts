class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        let rows: number = grid.length;
        let cols: number = grid[0].length;

        const dfs = (r: number, c: number, dis: number): void => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] < dis) {
                return;
            }

            grid[r][c] = Math.min(grid[r][c], dis)
            dfs(r + 1,c, dis + 1)
            dfs(r - 1,c, dis + 1)
            dfs(r,c + 1, dis + 1)
            dfs(r,c - 1, dis + 1)
        }


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    dfs(r,c,0)
                }
            }   
        }
    }
}
