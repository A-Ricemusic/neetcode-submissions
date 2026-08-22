    /* 
          C.  A.  T 
        C           0
        
        R           0

        A           0

        B           0

        T 1   1   1  0 
          0  0.  0. 0 

    
    */




class Solution {
    longestCommonSubsequence(text1, text2) {
        const rows = text1.length;
        const cols = text2.length;
        const dp = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
        for (let r = rows - 1; r >= 0; r--) {
            for (let c = cols - 1; c >= 0; c--) {
                if (text1[r] === text2[c]) {
                    dp[r][c] = 1 + dp[r + 1][c + 1]
                } else {
                    dp[r][c] = Math.max(dp[r + 1][c], dp[r][c + 1])
                }
            }
        }
        return dp[0][0]   
    }
}
