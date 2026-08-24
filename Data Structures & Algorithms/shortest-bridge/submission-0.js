class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestBridge(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const q = [];
        let head = 0;
        let visited = new Set();
        const dirs = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        const dfs = (r, c) => {
            const key = `${r},${c}`;
            if (r < 0 || r >= rows || c < 0 || c >= cols || visited.has(key) || grid[r][c] !== 1)
                return;
            visited.add(key);
            q.push([r, c]);
            for (const [dr, dc] of dirs) {
                dfs(dr + r, dc + c);
            }
        };

        let foundIsland = false;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    dfs(r, c);
                    foundIsland = true;
                    break;
                }
            }
            if (foundIsland) break;
        }

        let res = 0;
        while (q.length - head > 0) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const [r, c] = q[head++];
                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= rows || nr < 0 || nc >= cols || nc < 0 || visited.has(`${nr},${nc}`))
                        continue;
                    if (grid[nr][nc] === 1) return res;
                    q.push([nr, nc]);
                    visited.add(`${nr},${nc}`);
                }
            }
            res += 1;
        }

        return -1;
    }
}
