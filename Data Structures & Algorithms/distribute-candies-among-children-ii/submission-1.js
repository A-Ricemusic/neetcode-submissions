class Solution {
    /**
     * @param {number} n
     * @param {number} limit
     * @return {number}
     */
    distributeCandies(n, limit) {
        let res = 0
        const maxA = Math.min(n, limit)
        for (let a = 0; a <= maxA; a++) {
            const maxB = Math.min(n - a,limit)
            const minB = Math.max(0, n - a - limit);
            if (maxB >= minB) {
                res += maxB - minB + 1;
            }
        }

        return res;
    }
}
