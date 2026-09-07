class Solution {
    /**
     * @param {number[][]} isConnected
     * @return {number}
     * time: o(n * m + n)
     * space = o(n + n + n) => o(n)
    / 
     */
    findCircleNum(isConnected) {
        let n = isConnected.length;
        const adj = Array.from({length: n}, () => []);
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (isConnected[r][c] === 1 && r !== c) {
                    adj[r].push(c)
                }
            }
        }

        const visited = new Set();
        let res = 0;

        const dfs = (i) => {
            if (visited.has(i)) return;
            visited.add(i);
            for (const c of adj[i]) {
                dfs(c)
            }
        };

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                res++;
                dfs(i)
            }
        }

        return res;


    }
}
