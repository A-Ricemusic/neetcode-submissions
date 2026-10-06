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
        let res = {};
        const adj = {};

        for (let i = 0; i < n; i++) {
            adj[i] = [];
            res[i] = -1;
        };

        for (const [u,v,w] of edges) {
            adj[u].push([w,v]);
        };

        const heap = new PriorityQueue((a,b) => a[0] - b[0]);
        res[src] = 0;
        heap.enqueue([0,src]);

        while (!heap.isEmpty()) {
            const [w1,n1] = heap.dequeue();
            if (w1 > res[n1]) continue;
        
            for (const [w2,n2] of adj[n1]) {
                if (res[n2] === - 1 || w1 + w2 < res[n2]) {
                    res[n2] = w1 + w2;
                    heap.enqueue([w1 + w2, n2]);
                }
            }
        }

        return res;
    }
}
