class Solution {
    /**
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    minKnightMoves(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        const dirs = [[2,1], [1,2], [-2,1], [-2,-1], [-1,2], [-1,-2], [1,-2], [2,-1]]
        const q = [[0,0]]
        let head = 0;
        let visited = new Set();
        let res = 0;
        while (q.length - head > 0) {
            const levelSize = q.length - head;
            for (let i = 0; i < levelSize; i++) {
                const [cx, cy] = q[head++];
                if (visited.has(`${cx},${cy}`)) continue;
                visited.add(`${cx},${cy}`)
                if (cx === x && cy === y) return res;
                for (const [dx,dy] of dirs) {
                    const nx = cx + dx;
                    const ny = cy + dy;
                    if (nx < -2 || ny < -2 || visited.has(`${nx},${ny}`)) continue;
                    q.push([nx,ny]);
                }
            }
            res++;
        }
            
    }
}
