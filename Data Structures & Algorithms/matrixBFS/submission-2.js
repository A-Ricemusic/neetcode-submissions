class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        if (grid[0][0] === 1) return -1
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = new Set(["0,0"]);
        const directions = [[1,0], [0,1], [-1,0],[0,-1]];
        const q = [];
        let head = 0;
        q.push([0,0,0]);

        while (q.length - head > 0) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const [r,c,count] = q[head++];
                if (r === rows - 1 && c === cols - 1) return count
                for (const [dr,dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    const key = `${nr},${nc}`;
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols
                    || visited.has(key) || grid[nr][nc] === 1) continue;
                    q.push([nr,nc,count + 1])
                    visited.add(key)
                }
            }
        }
        return -1
    }
}
