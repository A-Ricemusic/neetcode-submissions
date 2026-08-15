class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const rows  = grid.length;
        const cols = grid.length;
        const q = [];
        let head = 0;
        const dirs = [[1,0],[0,1],[-1,0],[0,-1], [1,1],[-1,1],[1,-1],[-1,-1]];
        if (grid[0][0] !== 1) {
            q.push([0,0]);
        }
        let count = 0;
        while (q.length - head > 0) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const [r,c] = q[head++];
                if (r === rows - 1 && c === cols - 1) return count + 1;
                grid[r][c] = 1
                for (const [dr,dc] of dirs) {
                    const nr = dr + r;
                    const nc = dc + c;
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === 1) continue;
                    q.push([nr,nc])
                }
            }
            count++;
        }
        return -1

    }
}
