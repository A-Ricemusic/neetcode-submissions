/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        const res = {};
        const adj = Array.from({length: n + 1}, () => [])
        for (const [x,y,z] of edges) {
            adj[x].push([y,z])
        }

        for (let i = 0; i < n; i++) {
            res[i] = -1;
        }

        const heap = new MinPriorityQueue((x) => x[0]);
        heap.push([0,src])
        while (heap.size() > 0) {
            const [cost, node] = heap.dequeue()
            if (res[node] !== -1) {
                continue
            }
            res[node] = cost
            for (const [x,y] of adj[node]) {
                if (res[x] === -1) {
                    heap.push([cost + y, x])
                }
            }
        }
        return res;
    }
}
