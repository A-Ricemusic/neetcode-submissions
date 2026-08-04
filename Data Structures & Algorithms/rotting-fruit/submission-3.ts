class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const rows: number = grid.length;
        const cols: number = grid[0].length;
        let fresh: number = 0;
        const q: number[][] = [];
        let head: number = 0
        let time: number = 0;


        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                } else if (grid[r][c] === 2) {
                    q.push([r + 1,c])
                    q.push([r - 1,c])
                    q.push([r,c + 1])
                    q.push([r,c - 1])
                }
            }
        }

        while (q.length > head && fresh > 0) {
            const n: number = q.length - head;
            for (let i = 0; i < n; i++) {
                const r: number = q[head][0];
                const c: number = q[head][1];
                head++;
                if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== 1) {
                    continue
                }
                grid[r][c] = 2
                fresh--;
                q.push([r + 1,c])
                q.push([r - 1,c])
                q.push([r,c + 1])
                q.push([r,c - 1])
            }
            time++;
        }
        return fresh === 0? time: -1;
    }
}
