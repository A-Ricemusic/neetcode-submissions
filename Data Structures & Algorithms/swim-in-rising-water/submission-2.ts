class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const rows: number = grid.length;
        const cols: number = grid[0].length;
        const heap = new MinPriorityQueue((x) => x[0]); // [cost,[r,c]]
        const directions: number[][] = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        const visited: Set<string> = new Set<string>();
        heap.enqueue([grid[0][0], [0, 0]]);

        while (heap.size() > 0) {
            const [cost, coor] = heap.dequeue();
            const r: number = coor[0];
            const c: number = coor[1];
            const key: string = `${r},${c}`;
            if (visited.has(key)) continue;
            if (r === rows - 1 && c === cols - 1) {
                return cost;
            }
            visited.add(key);

            for (const [dr, dc] of directions) {
                const nr: number = dr + r;
                const nc: number = dc + c;
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited.has(`${nr},${nc}`)) {
                    continue;
                }
                heap.enqueue([Math.max(cost, grid[nr][nc]), [nr, nc]]);
            }
        }

        return -1;
    }
}
