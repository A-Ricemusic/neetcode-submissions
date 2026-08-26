class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     * 
     * time: o(n + n + n) => o(3n) => o(n)
     * space = o(1)
     */
    maxSatisfied(customers, grumpy, minutes) {
        let res = customers.reduce((a,b) => a + b, 0);
        const n = grumpy.length;
        for (let i = 0; i < n; i++) {
            if (grumpy[i] === 1) {
                res -= customers[i]
            }
        }

        let l = 0;
        let curr = res;
      
        for (let r = 0; r < n; r++) {
            if (grumpy[r] === 1) {
                curr += customers[r]
            }

            if (r - l + 1 > minutes) {
                if (grumpy[l] === 1) {
                    curr -= customers[l]
                }
                l++;
            }
            res = Math.max(res, curr)
        }

        return res;

    }
}
