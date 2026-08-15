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
        const res = {}
        const adj = Array.from({length: n}, () => []);
        for (const [u,v,w] of edges) {
            adj[u].push([w,v])
        }
        for (let i = 0; i < n; i++) {
            res[i] = -1
        }
        const heap = new PriorityQueue((a,b) => a[0] - b[0]);
        heap.enqueue([0,src])
        const visited = new Set()

        while (!heap.isEmpty()) {
            const [w1,n1] = heap.dequeue()
            if (visited.has(n1)) continue;
            visited.add(n1)
            res[n1] = w1;
            for (const [w2,n2] of adj[n1]) {
                if (visited.has(n2)) continue
                heap.enqueue([w1 + w2, n2])
            }
        }

        return res

    }
}
