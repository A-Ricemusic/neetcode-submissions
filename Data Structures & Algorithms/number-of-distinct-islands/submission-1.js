class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numDistinctIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = new Set();
        const res = new Set();


        const dfs = (r,c,path,dirs) => {
            const state = `${r},${c}`
            if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(state) || grid[r][c] === 0) {
                return
            }
            path.push(dirs);
            visited.add(state);
            dfs(r + 1,c,path,"D")
            dfs(r - 1,c,path,"U")
            dfs(r,c + 1,path,"R")
            dfs(r,c - 1,path,"L")
            path.push("E");

        }
  
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (!visited.has(`${r},${c}`) && grid[r][c] === 1) {
                    const path = []
                    dfs(r,c,path,"S");
                    res.add(path.join(","))
                }
            }
        }

        return res.size;


    }
}
