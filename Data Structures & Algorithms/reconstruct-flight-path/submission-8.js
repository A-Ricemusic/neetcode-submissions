class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = new Map();
        tickets.sort().reverse();
        for (const [u,v] of tickets) {
            if (!adj.has(u)) {
                adj.set(u,[])
            };
            adj.get(u).push(v);
        };

        let res = [];
        const dfs = function(src) {
            while (adj.has(src) && adj.get(src).length > 0) {
                const dst = adj.get(src).pop();
                dfs(dst);
            }
            res.push(src);
        };


        dfs("JFK");
        return res.reverse();;
    }
}
