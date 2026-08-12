class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = Array.from({length: n + 1}, () => []);
        for (const [u,v,w] of times) {
            adj[u].push([v,w])
        }
        const heap = new PriorityQueue((a,b) => a[0] - b[0]);
        let res = 0;
        const visited = new Set();
        heap.enqueue([0,k])
        while (!heap.isEmpty()) {
            const [weight,v] = heap.dequeue();
            if (visited.has(v)) continue;
            visited.add(v)
            res = Math.max(res, weight)
            for (const [dst,w] of adj[v]) {
                if (visited.has(dst)) continue;
                heap.enqueue([w + weight,dst])
            }
        }
        return visited.size === n? res : -1
    }
}
