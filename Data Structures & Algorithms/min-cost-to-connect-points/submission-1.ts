class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points: number[][]): number {
        let res: number = 0;
        const heap = new MinPriorityQueue((x) => x[0]);
        const visit: Set<string> = new Set<string>();
        heap.enqueue([0, points[0]]);

        while (visit.size < points.length) {
            const [cost, point] = heap.dequeue();
            const x: number = point[0];
            const y: number = point[1];
            const key: string = `${x},${y}`;
            if (visit.has(key)) continue;
            res += cost;
            visit.add(key);
            for (const point of points) {
                const currKey: string = `${point[0]},${point[1]}`;
                if (visit.has(currKey)) continue;
                const weight: number = Math.abs(x - point[0]) + Math.abs(y - point[1]);
                heap.enqueue([weight, point])
            }
        }

        return res;
    }
}
