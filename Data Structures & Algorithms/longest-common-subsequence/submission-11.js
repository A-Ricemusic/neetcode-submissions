class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     *  text1 = "cat", text2 = "crabt" 
     * i = 1, j = 1
     * [
     *    c a t
     * c [0,0,0,0]
     * r [0,0,0,0]
     * a [0,0,0,0]
     * b [0,2,1,0]
     * t [1,1,1,0]
     *   [0,0,0,0]
     * ]
     * 
     */
    longestCommonSubsequence(text1, text2) {
        const n = text1.length; //rows
        const m = text2.length; //cols
        let prev = new Array(m + 1).fill(0);
        for (let i = n - 1; i >= 0; i--) {
            let curr = new Array(m + 1).fill(0)
            for (let j = m - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    curr[j] = 1 + prev[j + 1]
                } else {
                    curr[j] = Math.max(prev[j], curr[j + 1])
                }
            }
            prev = curr
        }

        return prev[0]
    }
}
