class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @return {number[]}
     */
    findMinHeightTrees(n, edges) {
        if (n === 1) return [0];
        const adj = Array.from({length: n}, () => []);
        const indegrees = new Array(n).fill(0);
        for (const [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
            indegrees[u]++;
            indegrees[v]++;
        }

        const q = new Queue();
        for (let i = 0; i < n; i++) {
            if (indegrees[i] === 1) {
                q.enqueue(i)
            }
        }

        while (!q.isEmpty()) {
            if (n <= 2) return q.toArray();
            const size = q.size();
            for (let i = 0; i < size; i++) {
                const node = q.dequeue();
                n--;
                for (const nei of adj[node]) {
                    indegrees[nei]--;
                    if (indegrees[nei] === 1) {
                        q.enqueue(nei);
                    }
                }
            }
        }

        return [];
    }
}
