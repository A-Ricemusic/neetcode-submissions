class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     * 
     * 1,2,3.    1
     *         2
     *       3   23
     * 
     * 
     */
    combine(n: number, k: number): number[][] {

        let res: number[][] = [];

        const dfs = (num: number, curr: number[]) => {

            if (num === n + 1 && curr.length === k) {
                res.push([...curr])
                return
            }

            if (num === n + 1 || curr.length > k) {
                return
            }

            dfs(num + 1, curr);
            curr.push(num);
            dfs(num + 1, curr);
            curr.pop()

        }

        dfs(1,[]);

        return res
    }
}
