class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        const memo: Record<string, number> = {};

        const dfs = (i: number, j: number): number => {
            if (j === t.length) return 1;
            if (i === s.length) return 0;
            if (s.length - i < t.length - j) return 0;

            const key = `${i},${j}`;

            if (key in memo) return memo[key]

            let res = dfs(i + 1, j);
            if (s[i] === t[j]) {
                res += dfs(i + 1, j + 1)
            }
            memo[key] = res
            return res;
        }



        return dfs(0, 0);
    }
}
