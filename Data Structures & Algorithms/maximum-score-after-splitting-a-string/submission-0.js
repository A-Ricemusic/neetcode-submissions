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
        let zeroCount = 0
        let oneCount = 0
        for (const c of s) {
            if (c === "0") {
                zeroCount += 1
            } else {
                oneCount += 1
            }
        }
        let zeroSoFar = 0;
        let oneSoFar = 0;
        let res = 0;

        /* 
            zeroCount = 2
            oneCount = 4
            zeroSoFar = 1
            let oneSoFar = 1;
            let res = 5;
        
        */
        s[0] === "0"? zeroSoFar++ : oneSoFar++
        for (let i = 1; i < s.length; i++) {
            res = Math.max(res, zeroSoFar + (oneCount - oneSoFar))
            s[i] === "0"? zeroSoFar++ : oneSoFar++
        }

        return res;
    }
}
