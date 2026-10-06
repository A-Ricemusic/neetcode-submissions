class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        if (grid[0][0] === 1) return -1;
        const visited = new Set();
        let res = 0;
        const q = [[0,0]];
        let head = 0;
        const dirs = [[1,0], [0,1], [-1,0], [0,-1]];
        const rows = grid.length;
        const cols = grid[0].length;
        visited.add(`0,0`)
        while (q.length - head > 0) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const [r,c] = q[head++];
                if (r === rows - 1 && c === cols - 1) return res;
                for (const [dr,dc] of dirs) {
                    const nr = dr + r;
                    const nc = dc + c;
                    const state = `${nr},${nc}`;
                    if (nr < 0 || nr >= rows || nc < 0 || 
                    nc >= cols || visited.has(state) || grid[nr][nc] === 1) {
                        continue
                    };
                    q.push([nr,nc])
                    visited.add(`${nr},${nc}`)
                };
            }
            res++;
        }

        return -1;

    }
}
