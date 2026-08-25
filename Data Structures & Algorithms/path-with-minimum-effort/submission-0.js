class Solution {
    /**
     * @param {number[][]} heights
     * @return {number}
     * 
     * number of nodes which is variable n = rows * cols
     * time: o(nlog(n))
     * space(o(n))
     */
    minimumEffortPath(heights) {
        const visited = new Set()
        const rows = heights.length;
        const cols = heights[0].length;
        const heap = new PriorityQueue((a,b) => a[2] - b[2]); // [r,c,w]
        heap.enqueue([0,0,0]);
        const dirs = [[1,0], [0,1], [-1,0], [0,-1]];

        while (!heap.isEmpty()) {
            const [r,c,w] = heap.dequeue();
            if (r === rows - 1 && c === cols - 1) return w;
            visited.add(`${r},${c}`);
            for (const [dr,dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                const key = `${nr},${nc}`
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited.has(key)) {
                    continue;
                }
                const diff = Math.abs(heights[nr][nc] - heights[r][c]);
                const maxDifference = Math.max(w,diff)
                heap.enqueue([nr,nc,maxDifference])
            }
        }

    }
}
