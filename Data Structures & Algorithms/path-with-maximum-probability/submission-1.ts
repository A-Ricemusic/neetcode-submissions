class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number[]} succProb
     * @param {number} start_node
     * @param {number} end_node
     * @return {number}
     */
    maxProbability(
        n: number,
        edges: number[][],
        succProb: number[],
        start_node: number,
        end_node: number,
    ) {
        const adj: Record<number, number[][]> = {};
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }

        for (let i = 0; i < edges.length; i++) {
            const [u,v] = edges[i];
            const w = succProb[i];
            adj[u].push([w, v])
            adj[v].push([w,u])
        }
        
        const heap = new MaxPriorityQueue((x) => x[0]);
        let res: number = -Infinity;
        const visited: Set<number> = new Set<number>();
        heap.enqueue([1, start_node])
        

        while (heap.size() > 0) {
            const [prob, node] = heap.dequeue();
            if (node === end_node) {
                res = Math.max(res, prob)
            }
            if (visited.has(node)) continue;
            visited.add(node)
            for (const [w,v] of adj[node]) {
                if (visited.has(v)) continue;
                heap.enqueue([w * prob,v])
            }
        }



        return res === -Infinity? 0 : res;



    }
}
