class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let res: number = 0;
        let visited: Set<string> = new Set<string>();
        let rows: number = grid.length;
        let cols: number = grid[0].length;

        const dfs = (r: number,c: number): void => {
            const directions: number[][] = [[1,0], [0,1], [-1,0], [0,-1]];
            for (const dir of directions) {
                const nr: number = r + dir[0];
                const nc: number = c + dir[1];
                const key = String(nr) + String(nc);
                if (nr < 0 || 
                nr >= rows || 
                nc < 0 || 
                nc >= cols || 
                grid[nr][nc] === "0" || 
                visited.has(key)) {
                    continue
                };
                visited.add(key)
                dfs(nr,nc)

                
            }

        };



        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key: string = String(r) + String(c)
                if (!visited.has(key) && grid[r][c] === "1") {
                    res++;
                    visited.add(key)
                    dfs(r,c);
                }
            }
        }

        return res;
    }
}
