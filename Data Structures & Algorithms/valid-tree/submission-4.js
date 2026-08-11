class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const par = new Array(n).fill(0);
        const rank = new Array(n).fill(0);
        let connected = n;

        for (let i = 0; i < n; i++) {
            par[i] = i;
        }

        const find = (x) => {
            let p = par[x]
            while (p !== par[p]) {
                par[p] = par[par[p]]
                p = par[p]
            }
            return p
        }

        const union = (x,y) => {
            const p1 = find(x);
            const p2 = find(y);

            if (p1 === p2) return false

            if (rank[p1] > rank[p2]) {
                par[p2] = p1
            } else if (rank[p1] < rank[p2]) {
                par[p1] = p2
            } else {
                par[p2] = p1
                rank[p1]++; 
            }
            connected--;
            return true;
        }

        for (const [x,y] of edges) {
            if (!union(x,y)) {
                return false
            }
        }


        return connected === 1
    }
}
