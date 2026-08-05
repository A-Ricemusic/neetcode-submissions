class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n: number = edges.length;
        const adjList: number[][] = Array.from({length: n + 1}, () => []);

        const dfs = (node: number, par: number, visit: boolean[]) => {
            if (visit[node]) {
                return true
            }

            visit[node] = true;

            for (const nei of adjList[node]) {
                if (nei === par) {
                    continue;
                }

                if (dfs(nei,node,visit)) {
                    return true
                }
            }
            return false
        }


        for (const [a,b] of edges) {
            adjList[a].push(b);
            adjList[b].push(a);
            const visit: boolean[] = new Array(n + 1).fill(false)
            if (dfs(a, n + 1, visit)) {
                return [a,b]
            }
        }
        return []
    }
}
