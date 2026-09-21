class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let leftMin = 0;
        let leftMax = 0;
        for (const char of s) {
            if (char === "(") {
                leftMax++;
                leftMin++;
            } else if (char === ")") {
                leftMax--;
                leftMin--;
            } else {
                leftMax++;
                leftMin--;
            }
            if (leftMax < 0) return false;
            if (leftMin < 0) {
                leftMin = 0;
            }
        }

        return leftMin === 0;
    }
}
