class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length
        let dp = new Array(n + 1).fill(0);
        dp[n] = 1
        for (let i = n - 1; i >= 0; i--) {
            if (s[i] === "0") {
                dp[i] = 0;
                continue;
            };

            dp[i] = dp[i + 1];

            if (i + 1 < n && parseInt(s.substring(i, i + 2)) <= 26) {
                dp[i] += dp[i + 2];
            };

        }

        return dp[0]
        
    }
}
