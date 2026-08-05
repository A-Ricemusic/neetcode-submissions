class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const n: number = numCourses;
        const adjList: number[][] = Array.from({ length: n }, () => new Array());
        const indegree: number[] = new Array(n).fill(0);

        for (const pre of prerequisites) {
            adjList[pre[0]].push(pre[1]);
            indegree[pre[1]]++;
        }

        const q: number[] = [];
        let head: number = 0;
        let finish: number = 0;
        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                q.push(i)
                finish++;
            }
        }

        
        while (q.length - head > 0) {
            const crs: number = q[head++];
            for (const pre of adjList[crs]) {
                indegree[pre]--;
                if (indegree[pre] === 0) {
                    finish++;
                    q.push(pre)
                }
            }
        }

        return finish === n;
    }
}
