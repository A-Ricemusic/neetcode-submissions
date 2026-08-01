class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let res: number = 0
        let rows: number = grid.length;
        let cols: number = grid[0].length;

        const dfs = (r: number, c: number) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
                return
            }
            grid[r][c] = "0";
            dfs(r + 1,c)
            dfs(r - 1,c)
            dfs(r, c + 1)
            dfs(r, c - 1)
            
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1") {
                    res++;
                    dfs(r,c)
                }
            }
        }

        return res;
    }
}
