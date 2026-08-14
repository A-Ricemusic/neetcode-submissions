class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        const adj = Array.from({length: numCourses}, () => []);
        const indegrees = new Array(numCourses).fill(0);
        for (const [x,y] of prerequisites) {
            adj[x].push(y);
            indegrees[y]++;
        }

        const prereqs = Array.from(
        { length: numCourses },
        () => new Set()
        );

        const q = []
        let head = 0
        for (let i = 0; i < numCourses; i++) {
            if (indegrees[i] === 0) {
                q.push(i)
            }
        }

     while (q.length - head > 0) {
        const node = q[head++];
        for (const nei of adj[node]) {
            prereqs[nei].add(node);

            for (const pre of prereqs[node]) {
                prereqs[nei].add(pre);
            }

            indegrees[nei]--;
            if (indegrees[nei] === 0) {
                q.push(nei);
            }
        }
        
     }

     const ans = []

     for (const [x,y] of queries) {
        ans.push(prereqs[y].has(x));
     }

    return ans
     
    }
}
