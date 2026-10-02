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
        };
        for (const [u,v] of edges) {
            adj.get(u).push(v);
        };
        const res = [];
        const visiting = new Set();
        const visited = new Set();
       
        const dfs = (n) => {
            if (visiting.has(n)) return false;
            if (visited.has(n)) return true;
            visiting.add(n);

            for (const nei of adj.get(n)) {
                if (!dfs(nei)) return false;
            }

            visiting.delete(n);
            visited.add(n);
            res.push(n);
            return true;
        }



        for (let i = 0; i < n; i++) {
            if (!dfs(i)) return [];
        };

        res.reverse();
        return res;
    }
}
