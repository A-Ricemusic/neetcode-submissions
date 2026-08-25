class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({length: numCourses}, () => []);
        const indegrees = new Array(numCourses).fill(0);

        for (const [u, v] of prerequisites) {
            adj[v].push(u);
            indegrees[u] += 1;
        }

        const q = [];
        let head = 0;

        for (let i = 0; i < numCourses; i++) {
            if (indegrees[i] === 0) {
                q.push(i)
            }
        }

        let res = []

        while (q.length - head > 0) {
            const node = q[head++];
            res.push(node)
            for (const node2 of adj[node]) {
                indegrees[node2] -= 1
                if (indegrees[node2] === 0) {
                    q.push(node2)
                }
            }
        }

        return res.length === numCourses? res : []

    }
}
