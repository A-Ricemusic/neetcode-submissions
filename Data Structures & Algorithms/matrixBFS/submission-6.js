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
        while (q.length - head > 0) {
            const size = q.length - head;
            for (let i = 0; i < size; i++) {
                const [r,c] = q[head++];
                const state1 = `${r},${c}`;
                if (visited.has(state1)) continue;
                visited.add(state1);
                if (r === rows - 1 && c === cols - 1) return res;
                for (const [dr,dc] of dirs) {
                    const nr = dr + r;
                    const nc = dc + c;
                    const state2 = `${nr},${nc}`;
                    if (nr < 0 || nr >= rows || nc < 0 || 
                    nc >= cols || visited.has(state2) || grid[nr][nc] === 1) {
                        continue
                    };
                    q.push([nr,nc])
                };
            }
            res++;
        }

        return -1;

    }
}
