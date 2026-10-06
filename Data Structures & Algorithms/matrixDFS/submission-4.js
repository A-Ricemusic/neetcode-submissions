class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        if (grid[0][0] === 1) return 0;
        let res = 0;
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = new Set();
        
        const dfs = (r,c) => {
            if (r ===  rows - 1 && c === cols - 1) return 1;
            const dirs = [[1,0], [0,1], [-1,0], [0,-1]]
            let res = 0;

            for (const [dr,dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                const state = `${nr},${nc}`;
                if (visited.has(state) || nr < 0 || nr >= rows || 
                nc < 0 || nc >= cols || grid[nr][nc] === 1) {
                    continue;
                }
                visited.add(state);
                res += dfs(nr,nc);
                visited.delete(state);
            }
            return res;
        }

        visited.add(`0,0`);
        return dfs(0,0);
    }
}
