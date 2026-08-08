class Solution {
    /**
     * @param {string} s
     * @return {number}
     * "aaaaaaa"
     */
    countSubstrings(s: string): number {
        let res: number = 0;
        const n: number = s.length;
        const dp: boolean[][] = Array.from({length: n}, () => new Array(n).fill(false))

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                    dp[i][j] = true;
                    res++;
                }
            }
        }

        return res;
    }
}
