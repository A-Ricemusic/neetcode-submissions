class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     *
     * curr = 1
     *
     * [[2, 200, 100, 0], [3, 200, 300, 0]]
     */
    findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number) {
        let res: number = Infinity;
        const adj: Record<number, [number, number][]> = {};
        const stack: [number, number, number][] = [[src, 0, k]];
         const best = new Map<string, number>();
        // [dst, currCost, price, stops]

        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }
        for (const [src, dst, price] of flights) {
            adj[src].push([dst, price]);
        }
        while (stack.length > 0) {
            const [ap, cost,stops] = stack.pop();
            if (ap === dst) {
                res = Math.min(res, cost );
                continue;
            }
            if (stops === -1) continue;

            const key = `${ap},${stops}`;
            if (best.has(key) && best.get(key)! <= cost) continue;
            best.set(key, cost);

            for (const [next, price] of adj[ap]) {
                stack.push([next, cost + price, stops - 1]);
            }
        }
        return res === Infinity ? -1 : res;
    }
}
