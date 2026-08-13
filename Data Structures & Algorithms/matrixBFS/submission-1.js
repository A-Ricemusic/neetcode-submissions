class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        if (grid[0][0] === 1) return -1
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = new Set();
        const directions = [[1,0], [0,1], [-1,0],[0,-1]];
        const q = [];
        let head = 0;
        let res = Infinity;
        q.push([0,0,0]);

        while (q.length - head > 0) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const [r,c,count] = q[head++];
                const key = `${r},${c}`
                if (visited.has(key)) continue;
                visited.add(key)
                if (r === rows - 1 && c === cols - 1) {
                    res = Math.min(res,count)
                }
                for (const [dr,dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    const key2 = `${nr},${nc}`;
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols
                    || visited.has(key2) || grid[nr][nc] === 1) continue;
                    q.push([nr,nc,count + 1])
                }
            }
        }
        return res === Infinity? -1 : res
    }
}
