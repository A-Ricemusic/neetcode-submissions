class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {

        let res: string[] = []

        const dfs = (curr: string[], lr: number[] ) => {

            if (lr[0] === n && lr[1] === n) {
                res.push(curr.join(''))
                return
            }

            if (lr[0] === n) {
                curr.push(")")
                lr[1]++
                dfs(curr,lr)
                lr[1]--
                curr.pop()
                return
            }

            if (lr[0] === lr[1]) {
                curr.push("(")
                lr[0]++;
                dfs(curr,lr)
                lr[0]--
                curr.pop()
            } else if (lr[0] > lr[1]) {
                curr.push("(")
                lr[0]++;
                dfs(curr,lr)
                lr[0]--
                curr.pop()
                curr.push(")")
                lr[1]++;
                dfs(curr,lr)
                lr[1]--;
                curr.pop()
            }



        };

        dfs([],[0,0])

        return res
    }
}
