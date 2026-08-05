class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        const adjList: number[][] = Array.from({ length: n }, () => new Array());

        for (const edge of edges) {
            adjList[edge[0]].push(edge[1]);
            adjList[edge[1]].push(edge[0]);
        }

        const visited: Set<number> = new Set<number>();

        const dfs = (i: number, prev: number): boolean => {
            if (visited.has(i)) {
                return false;
            }
            visited.add(i);

            for (const nei of adjList[i]) {
                if (nei === prev) {
                    continue;
                }

                if (!dfs(nei, i)) {
                    return false;
                }
            }

            return true;
        };

        return dfs(0, -1) && visited.size === n;
    }
}
