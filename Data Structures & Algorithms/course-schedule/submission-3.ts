class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     *
     * numCo
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const n: number = numCourses;
        const adjList: number[][] = Array.from({ length: n }, () => new Array());

        for (const pre of prerequisites) {
            adjList[pre[0]].push(pre[1]);
        }

        const visited: Set<number> = new Set<number>();

        const dfs = (i: number): boolean => {
            if (visited.has(i)) {
                return false;
            }

            if (adjList[i].length === 0) {
                return true;
            }

            visited.add(i);

            for (const crs of adjList[i]) {
                if (!dfs(crs)) {
                    return false;
                }
            }

            visited.delete(i);
            adjList[i] = [];
            return true;
        };

        for (let i = 0; i < n; i++) {
            if (!dfs(i)) {
                return false;
            }
        }

        return true;
    }
}
