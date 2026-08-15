class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adj = Array.from({length: n}, () => []);
        const indegrees = new Array(n).fill(0)
        for (const [x,y] of edges) {
            adj[x].push(y)
            indegrees[y]++;
        }  

        const q = [];
        let head = 0;
        const visited = new Set();
        const res = [];
        for (let i = 0; i < n; i++) {
            if (indegrees[i] === 0) {
                q.push(i)
            }
        }


        while (q.length - head > 0) {
            const node = q[head++]
            if (visited.has(node)) continue;
            visited.add(node)
            res.push(node)
            for (const node2 of adj[node]) {
                if (visited.has(node2)) continue;
                indegrees[node2]--;
                if (indegrees[node2] === 0) {
                    q.push(node2)
                }
            }
        }

        return visited.size === n? res : []
    }
}
