class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n: number = edges.length + 1
        const par: Record<number,number> = {};
        const rank: Record<number,number> = {};

        for (let i = 1; i < n; i++) {
            par[i] = i;
            rank[i] = 0
        }

        const find = (i: number): number => {
            let p: number = par[i]

            while (p !== par[p]) {
                par[p] = par[par[p]]
                p = par[p]
            }
            return p;
        }

        const union = (x: number, y: number): boolean => {
            const p1: number = find(x);
            const p2: number = find(y);

            if (p1 === p2) return false;

            if (rank[p1] > rank[p2]) {
                par[p2] = p1;
            } else if (rank[p2] < rank[p1]) {
                par[p1] = p2;
            } else {
                par[p1] = p2;
                rank[p2]++;
            }
            return true;
        }

        for (const [x,y] of edges) {
            if (!union(x,y)) {
                return [x,y]
            }
        }

        return []

    }
}
