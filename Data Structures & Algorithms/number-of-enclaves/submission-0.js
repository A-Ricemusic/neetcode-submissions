class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {
        let onesCount = 0
        let rows = grid.length;
        let cols = grid[0].length;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    onesCount += 1;
                }
            }
        }

        const visited = new Set()
        const dfs = (r,c) => {
            const key = `${r},${c}`
            if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(key)) {
                return 
            }
            visited.add(key)
            if (grid[r][c] === 1) {
                onesCount--;
                dfs(r + 1,c)
                dfs(r - 1,c)
                dfs(r,c + 1)
                dfs(r,c - 1)
            }

        }

        for (let c = 0; c < cols; c++) {
            if (grid[0][c] === 1) {
                dfs(0,c)
            }
            if (grid[rows - 1][c] === 1) {
                dfs(rows - 1,c)
            }
        }

        for (let r = 0; r < rows; r++) {
            if (grid[r][0] === 1) {
                dfs(r,0)
            }

            if (grid[r][cols - 1] === 1) {
                dfs(r, cols - 1)
            }
        }

        return onesCount;

    }
}
