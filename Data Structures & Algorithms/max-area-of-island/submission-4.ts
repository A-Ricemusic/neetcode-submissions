class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let res: number = 0;
        let rows: number = grid.length;
        let cols: number = grid[0].length;
        const visited: Set<string> = new Set<string>()
        let currArea: number = 0;


        const bfs = (r: number, c: number) => {
            const directions: number[][] = [[1,0], [0,1], [-1,0], [0,-1]]
            

            for (const dir of directions) {
                const nr: number = r + dir[0];
                const nc: number = c + dir[1];
                const key: string = String(nr) + "," + String(nc);
                
                if (nr < 0 ||
                nr >= rows ||
                nc < 0 ||
                nc >= cols ||
                visited.has(key) ||
                grid[nr][nc] === 0) {
                    continue
                }
                currArea++;
                res = Math.max(res, currArea)
                console.log(key)
                visited.add(key)
                bfs(nr,nc);
            }
        }


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key: string = String(r) + "," + String(c);
                currArea = 0
                if (grid[r][c] === 1 && !visited.has(key)) {
                    currArea++;
                    res = Math.max(res, currArea)
                    visited.add(key)
                    bfs(r,c)
                }
            }
        }

        return res

    }
}
