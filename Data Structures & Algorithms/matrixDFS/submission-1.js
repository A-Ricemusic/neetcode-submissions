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
            const key = `${r},${c}`
            if (r < 0 || r >= rows || c < 0 || c >= cols 
            || grid[r][c] === 1 || visited.has(key)) return 0
            if (r === rows -1 && c === cols - 1) return 1
            visited.add(key)
            const res = dfs(r + 1,c) + dfs(r, c + 1) + dfs(r - 1,c) + dfs(r, c - 1)
            visited.delete(key)
            return res
        }


        return dfs(0,0)
    }
}
