class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * time: O(n^2)
     * space: O(n^2)
     */
    checkValidString(s) {
        const leftStack = []
        const starStack = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                leftStack.push(i)
            } else if (s[i] === "*") {
                starStack.push(i)
            } else {
                if (leftStack.length === 0 && starStack.length === 0) return false;
                if (leftStack.length > 0) {
                    leftStack.pop()
                } else {
                    starStack.pop()
                }
            }
        }


        while (leftStack.length > 0) {
            if (starStack.length === 0) return false;
            if (starStack.pop() < leftStack.pop()) return false;
        }

        return true;
    }
}
