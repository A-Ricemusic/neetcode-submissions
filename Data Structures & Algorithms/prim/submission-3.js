/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} edges
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        const adj = Array.from({length: n}, () => []);

        for (const [u,v,w] of edges) {
            adj[u].push([w,v])
            adj[v].push([w,u])
        }
        const heap = new PriorityQueue((a,b) => a[0] - b[0]);
        heap.enqueue([0,0])
        const visited = new Set()
        let res = 0

        while (visited.size < n && !heap.isEmpty()) {
            const [w1,n1] = heap.dequeue()
            if (visited.has(n1)) continue;
            visited.add(n1)
            res += w1
            for (const [w2,n2] of adj[n1]) {
                if (visited.has(n2)) continue;
                heap.enqueue([w2,n2])
            }
        }

        return visited.size === n ? res : -1
    }
}
