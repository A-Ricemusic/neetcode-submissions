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
        let res = 0;
        let visited = {};
        let size = 0;
        const adj = {};
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }
        for (const [u,v,w] of edges) {
            adj[u].push([w,v]);
            adj[v].push([w,u]);
        };
        const heap = new PriorityQueue((a,b) => a[0] - b[0]);
        heap.enqueue([0,0]) //weight, node;
        while (size < n && !heap.isEmpty()) {
            const [w1,n1] = heap.dequeue();
            if (Object.hasOwn(visited,n1)) continue;
            visited[n1] = 0;
            size++;
            res += w1;
            for (const [w2,n2] of adj[n1]) {
                if (Object.hasOwn(visited,n2)) continue;
                heap.enqueue([w2,n2]); 
            }

        }

        return size === n? res : -1;
    }
}
