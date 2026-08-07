class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets: string[][]): string[] {
        const adj: Record<string,string[]> = {};
        const res: string[] = []

        tickets.sort().reverse().forEach(([src,dst]) => {
            if (!(src in adj)) {
                adj[src] = [];
            };
            adj[src].push(dst);
        });

        const dfs = (src: string) => {
            while ((src in adj) && adj[src].length > 0) {
                const dst: string = adj[src].pop()
                dfs(dst)
            }
            res.push(src)
        };
        


        dfs("JFK")
        return res.reverse()


    }
}
