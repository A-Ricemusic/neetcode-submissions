class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number[]}
     */
    topologicalSort(n, edges) {
        const adj = new Map();
        for (let i = 0; i < n; i++) {
            adj.set(i, []);
        }
        for (const [u,v] of edges) {
            adj.get(u).push(v);
        }
        const res = [];
        const visited = new Set();
        const visiting = new Set();

        const dfs = (i) => {
            if (visited.has(i)) return true;
            if (visiting.has(i)) return false;

            visiting.add(i);
            for (const nei of adj.get(i)) {
                if (!dfs(nei)) return false;
            }
            visiting.delete(i);
            visited.add(i);
            res.push(i);
            return true

        }



        for (let i = 0; i < n; i++) {
            if (!dfs(i)) return [];
        }

        res.reverse();
        return res;
    
    }
}
