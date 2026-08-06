class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const adj: Record<number, number[][]> = {};
        const res: Record<number,number> = {};
        const heap = new MinPriorityQueue((x) => x[0]);

        for (let i = 0; i < n + 1; i++) {
            adj[i] = new Array();
        }

        for (const [u,v,w] of times) {
            adj[u].push([v,w])
        }

        heap.enqueue([0,k])


        while (heap.size() > 0) {
            const [cost, node] = heap.dequeue()
            if (node in res) {
                continue;
            }
            res[node] = cost;
            for (const [newNode, newCost] of adj[node]) {
                if (!(newNode in res)) {
                    heap.enqueue([cost + newCost, newNode]);
                }
            }
        }

        if (Object.keys(res).length !== n) {
            return -1
        }
        //console.log(res)
        //console.log(Object.entries(res).sort((a,b) => b[1] - a[1]))
        return Object.entries(res).sort((a,b) => b[1] - a[1])[0][1]

    }
}
