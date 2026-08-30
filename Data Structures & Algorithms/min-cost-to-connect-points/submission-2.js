class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const adj = Array.from({length: points.length}, () => []);
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.abs(points[j][0] - points[i][0]) + Math.abs(points[j][1] - points[i][1])
                adj[i].push([dist, j]);
                adj[j].push([dist, i]);
            }
        }

        const visited = new Set();
        const heap = new PriorityQueue((a,b) => a[0] - b[0]);
        heap.enqueue([0,0]);
        let res = 0;

        while (visited.size !== points.length) {
            const [w1, n1] = heap.dequeue();
            if (visited.has(n1)) continue;
            visited.add(n1);
            res += w1;
            for (const [w2, n2] of adj[n1]) {
                if (visited.has(n2)) continue;
                heap.enqueue([w2, n2]);
            }
        }

        return res;
    }
}
