class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {boolean[]} hasApple
     * @return {number}
     */
    minTime(n, edges, hasApple) {
        const adj = Array.from({length: n}, () => []);
        let appleCount = 0;
        for (const apple of hasApple) {
            if (apple) {
                appleCount++;
            }
        }

        for (const [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }



        const dfs = (curr, parent) => {
            let time = 0
            for (const child of adj[curr]) {
                if (child === parent) continue;
                const childTime = dfs(child, curr);
                if (childTime > 0 || hasApple[child]) {
                    time += 2 + childTime;
                }
            }

            return time;
        }

        return dfs(0,-1)

    }
}
