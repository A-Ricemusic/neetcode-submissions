class Solution {
    longestCommonSubsequence(text1, text2) {
        const rows = text1.length;
        const cols = text2.length;
        let curr = new Array(cols + 1).fill(0);
        let prev = new Array(cols + 1).fill(0);
        for (let r = rows - 1; r >= 0; r--) {
            for (let c = cols - 1; c >= 0; c--) {
                if (text1[r] === text2[c]) {
                    curr[c] = 1 + prev[c + 1]
                } else {
                    curr[c] = Math.max(curr[c + 1], prev[c])
                }
            }
            [curr, prev] = [prev,curr]
        }
        return prev[0]   
    }
}
