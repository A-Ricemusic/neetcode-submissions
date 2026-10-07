class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = {};
        const indegrees = {};
        for (let i = 0; i < numCourses; i++) {
            adj[i] = [];
            indegrees[i] = 0;
        }

        for (const [u,v] of prerequisites) {
            adj[u].push(v);
            indegrees[v] += 1;
        };

        const q = [];
        let head = 0;
        for (let i = 0; i < numCourses; i++) {
            if (indegrees[i] === 0) {
                q.push(i);
            };
        }
        let res = [];
        while (q.length - head > 0) {
            const n = q[head++]
            res.push(n);
            for (const nei of adj[n]) {
                indegrees[nei]--;
                if (indegrees[nei] === 0) {
                    q.push(nei);
                }
            }
        }

        return res.length === numCourses
    }
}
