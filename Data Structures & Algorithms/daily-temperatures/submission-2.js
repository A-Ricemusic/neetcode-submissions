class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        const n = temperatures.length
        const res = new Array(n).fill(0)
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const [_, idx] = stack.pop();
                res[idx] = i - idx
                
            }

            stack.push([temperatures[i], i])
        }

        return res;
    }
}
