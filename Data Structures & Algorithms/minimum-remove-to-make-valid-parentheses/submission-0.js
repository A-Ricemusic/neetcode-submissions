class Solution {
    /**
     * @param {string} s
     * @return {string}
     * 
     * example 2: 
     * s = "n(e(e(t(co)de)"
     * res = [n,e,e]
     * toRemove = set([1,3])
     * stack = [1,3,5]
     * 
     * example 1: 
     * s = "nee(t(c)o)de)"
     * toRemove = set([])
     * stack = []
     */
    minRemoveToMakeValid(s) {
        const toRemove = new Set();
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                stack.push(i)
            } else if(s[i] === ")") {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    toRemove.add(i)
                }
            }
        }

        while (stack.length > 0) {
            toRemove.add(stack.pop());
        }

        const res = [];
        for (let i = 0; i < s.length; i++) {
            if (toRemove.has(i)) continue;
            res.push(s[i]);
        }

        return res.join("")
    }
}
