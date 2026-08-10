class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        const memo: Record<string,number> = {}

        const dfs = (i: number, curr: string) => {
            if (curr === t) {
                return 1;
            }
            if (curr.length >= t.length || i >= s.length) {
                return 0;
            }
            const key: string = `${i},` + curr;
            if (key in memo) return memo[key]

            const res: number = dfs(i + 1,curr) + dfs(i + 1, curr + s[i]);

            memo[key] = res;
            return res;
        
        }


        return dfs(0,"")
    }
}
