class Solution {
    /**
     * @param {string} s
     * @return {number}
     * ones = 4
     * zero  = 2
     * zeroSoFar = 1
     * onesSoFar = 1
     * res = 5
     */
    maxScore(s) {
    
        let zero = 0;
        let one = 0;
        let res = -Infinity;

        s[0] === "0"? zero++ : one++
        for (let i = 1; i < s.length; i++) {
            res = Math.max(res, zero - one)
            s[i] === "0"? zero++ : one++
        }

        return res + one;
    }
}
