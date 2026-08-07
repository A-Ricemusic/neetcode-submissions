class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     * "("
     */
    generateParenthesis(n: number): string[] {
        const res: string[] = [];

        const dfs =(curr: string[], open: number, closed: number) => {
            if (open === n && closed === n) {
                res.push(curr.join(""));
                return;
            }

            if (open === n) {
                curr.push(")")
                dfs(curr, open, closed + 1)
                curr.pop()
                return
            }

            if (open === closed) {
                curr.push("(")
                dfs(curr, open + 1, closed)
                curr.pop()
                return
            }

            curr.push("(")
            dfs(curr, open + 1, closed)
            curr.pop()
            curr.push(")")
            dfs(curr, open, closed + 1)
            curr.pop()

        };

        dfs([],0,0)
        return res;
    }
}
