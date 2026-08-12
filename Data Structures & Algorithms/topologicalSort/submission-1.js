class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adj = Array.from({length: n}, () => []);
        const indegrees = new Array(n).fill(0);

        for (const [u,v] of edges) {
            adj[u].push(v);
            indegrees[v]++;
        }
        
        const q = [];
        let head = 0;
        const visited = new Set();
        const res = [];
        for (let i = 0; i < n; i++) {
            if (indegrees[i] === 0) {
                q.push(i)
                res.push(i)
            }
        }

        while (q.length - head > 0) {
            const node = q[head++];
            if (visited.has(node)) continue;
            visited.add(node);
            for (const nei of adj[node]) {
                if (visited.has(nei)) continue;
                indegrees[nei]--;
                if (indegrees[nei] === 0) {
                    q.push(nei)
                    res.push(nei)
                }
            }
        }

        return visited.size === n? res : []

    }
}
