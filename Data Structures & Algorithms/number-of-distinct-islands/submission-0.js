class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numDistinctIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const res = new Set();
        const visited = new Set();
        const dfs = (r,c,dir,path) => {
            if (r < 0 || r >= rows || c < 0 
            || c >= cols || visited.has(`${r},${c}`) || grid[r][c] === 0){
                return 
            }
            path.push(dir);
            visited.add(`${r},${c}`)
            dfs(r + 1,c,"U", path);
            dfs(r - 1,c,"D", path);
            dfs(r,c + 1,"R", path);
            dfs(r,c - 1,"L", path);
            path.push("E")
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] == 1 && !visited.has(`${r},${c}`)) {
                    let path = []
                    dfs(r,c,"S",path)
                    res.add(path.join(','));
                }
            }
        }

        return res.size;
    }
}
