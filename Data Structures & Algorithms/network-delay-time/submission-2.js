class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = Array.from({length: n + 1}, () => [])
        for (const [u,v,t] of times) {
            adj[u].push([t,v])
        }
        const heap = new PriorityQueue((a,b) => a[0] - b[0]) //[w,v]
        const visited = new Set()
        heap.enqueue([0,k])
        let res = 0
        while (!heap.isEmpty()) {
            const [weight, dst] = heap.dequeue()
            if (visited.has(dst)) continue;
            visited.add(dst);
            res = Math.max(res, weight);
            for (const [w,v] of adj[dst]) {
                if (visited.has(v)) continue;
                heap.enqueue([weight + w, v])
            }
        }

        return visited.size === n? res : -1;
    }
}
