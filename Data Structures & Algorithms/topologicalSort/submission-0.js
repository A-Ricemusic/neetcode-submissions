class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adj = Array.from({length: n}, () => []);

        for (const [u,v] of edges) {
            adj[u].push(v);
        }
        const visited = new Set();
        const path = new Set();
        const res = [];


        const dfs = (i) => {
            if (path.has(i)) return false;
            if (visited.has(i)) return true;
            visited.add(i)
            path.add(i)
            for (const nei of adj[i]) {
                if(!dfs(nei)) {
                    return false;
                }
            }
            res.push(i);
            path.delete(i);
            return true;
        }


        for (let i = 0; i < n; i++) {
            if(!dfs(i)) {
                return [];
            }
        }

        return res.reverse()
    }
}
