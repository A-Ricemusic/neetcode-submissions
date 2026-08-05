class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adjList: number[][] = Array.from({length: n}, () => []);

        for (const edge of edges) {
            adjList[edge[0]].push(edge[1]);
            adjList[edge[1]].push(edge[0]);
        }

        const visited: boolean[] = new Array(n).fill(false);

        const dfs = (i: number) => {
            if (visited[i]) {
                return
            }

            visited[i] = true

            for (const nei of adjList[i]) {
                dfs(nei)
            }
        }

        let res: number = 0;

        for (let i = 0; i < n; i++) {
            if (!visited[i]){
                dfs(i)
                res++;
            }
        }

        return res;

    }
}
