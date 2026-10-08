class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const dist = new Map();
        for (let i = 1; i <= n; i++) {
            dist.set(i, Infinity);
        }
        dist.set(k,0)

        for (let i = 0; i < n - 1; i++) {
            for (const [u,v,w] of times) {
                if (dist.get(u) + w < dist.get(v)) {
                    dist.set(v,dist.get(u) + w )
                }
            }
        }

        const maxDist = Math.max(...dist.values())
        return maxDist === Infinity? -1 : maxDist
    }
}
