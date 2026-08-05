class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adjList: number[][] = Array.from({length: numCourses}, () => new Array());
        const indegree: number[] = new Array(numCourses).fill(0)
        for (const pre of prerequisites) {
            adjList[pre[1]].push(pre[0])
            indegree[pre[0]]++;
        }

        const q: number[] = []
        let head: number = 0;
        const res: number[] = []
        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                q.push(i)
            }
        }

        while (q.length - head > 0) {
            const crs: number = q[head++];
            res.push(crs);
            for (const pre of adjList[crs]) {
                indegree[pre]--;
                if (indegree[pre] === 0) {
                    q.push(pre)
                }
            }
        }

        if (res.length !== numCourses) {
            return []
        }

        return res;
    }
}
