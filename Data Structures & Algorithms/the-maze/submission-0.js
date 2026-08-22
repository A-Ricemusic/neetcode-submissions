class Solution {
    /**
     * @param {number[][]} maze
     * @param {number[]} start
     * @param {number[]} destination
     * @return {boolean}
     */
    hasPath(maze, start, destination) {
        const visited = new Set();
        const rows = maze.length;
        const cols = maze[0].length;
        const grid = maze

        const dfs = (r,c) => {
            if (r === destination[0] && c === destination[1]) {
                return true;
            }
            const key = `${r},${c}`
            if (visited.has(key)) return false;
            visited.add(key)

            let left = false
            for (let i = c; i >= -1; i--) {
                if (i === -1 || grid[r][i] === 1) {
                    left = dfs(r, i + 1)
                    break
                }
            }
            let right = false
            for (let i = c; i <= cols; i++) {
                if (i === cols || grid[r][i] === 1) {
                    right = dfs(r, i - 1)
                    break
                }
            }
            let up = false
            for (let i = r; i >= -1; i--) {
                if (i === -1 || grid[i][c] === 1) {
                    up = dfs(i + 1, c)
                    break
                }
            }
            let down = false
            for (let i = r; i <= rows; i++) {
                if (i === rows || grid[i][c] === 1) {
                    down = dfs(i - 1,c)
                    break
                }
            }

            return up || down || left || right

        }


        return dfs(start[0], start[1])
    }
}
