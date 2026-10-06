class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = new Map();
        tickets.sort().reverse();

        for (const [src,dst] of tickets) {
            if (!adj.has(src)) {
                adj.set(src, []);
            };
            adj.get(src).push(dst);
        };
        let res = [];
        const dfs = (src) => {
            while (adj.has(src) && adj.get(src).length > 0) {
                const dst = adj.get(src).pop();
                dfs(dst)
            }
            res.push(src)
        }


        dfs("JFK");
        return res.reverse();
    }
}
