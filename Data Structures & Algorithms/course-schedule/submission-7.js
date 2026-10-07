class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = {};
        const n = numCourses
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }

        for (const [u,v] of prerequisites) {
            adj[u].push(v);
        }

        const visited = new Set();
        const visiting = new Set();

        const dfs = (n) => {
            if (visiting.has(n)) return false;
            if (visited.has(n)) return true;

            visiting.add(n);
            for (const nei of adj[n]) {
                if (!dfs(nei)) return false;
            }

            visiting.delete(n);
            visited.add(n);
            return true;

        }

        for (let i = 0; i < n; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}
