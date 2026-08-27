class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length
        let dp2 = 0;
        let dp1 = 1;
        let dp = 0;
        for (let i = n - 1; i >= 0; i--) {
            if (s[i] === "0") {
                dp = 0;
                
            } else {
                dp = dp1;

                if (i + 1 < n && parseInt(s.substring(i, i + 2)) <= 26) {
                    dp += dp2;
                };
            }
            
            dp2 = dp1;
            dp1 = dp;
            dp = 0;
        }

        return dp1;
        
    }
}
