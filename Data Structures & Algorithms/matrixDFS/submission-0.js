class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid) {
        const visited = new Set()
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r,c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols 
            || visited.has(`${r},${c}`) || grid[r][c] === 1) return 0;
            if (r === rows - 1 && c === cols - 1) return 1;
            visited.add(`${r},${c}`);
            const res = dfs(r + 1,c) + dfs(r - 1,c) + dfs(r, c + 1) + dfs(r, c - 1)
            visited.delete(`${r},${c}`)
            return res
        }

        return dfs(0,0)
    }
}
