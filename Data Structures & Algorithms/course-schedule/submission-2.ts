class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     * 
     * numCourses = 6, prerequisites = [[0,1], [1,2], [2,3], [4,5]]
     * 
     * 1.) build adjList
     * 2.) traverse and check for a cycle
     * 3.) if cycle then false else true
     * 
     * [[1],[2],[3],[],[5],[]]
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {

        const adjList: number[][] = Array.from({length: numCourses }, () => [])

        for (const pre of prerequisites) {
            adjList[pre[0]].push(pre[1])
        }
        const visited: Set<number> = new Set<number>();
        const dfs = (crs: number): boolean => {
            if (visited.has(crs)) {
                return false;
            }

            if (adjList[crs].length === 0) {
                return true
            }

            visited.add(crs)
            for (const peq of adjList[crs]) {
                if (!dfs(peq)) {
                    return false
                }
            }
            visited.delete(crs)
            adjList[crs] = []


            return true
        };

        for (let crs = 0; crs < numCourses; crs++) {
            if (!dfs(crs)) {
                return false
            }
        }

        return true
    }
}
