class Solution {
    /**
     * @param {number[]} ribbons
     * @param {number} k
     * @return {number}
     * 5,4,3,2,1,0
     * ribbons = [9,7,5] k = 5
     *            9                         7                       5
     * [9,0][8,1],[7,2],[6,3],[5,4]  [7,0][6,1], [5,2], [4,3]  [5,0] [4,1],[3,2]
     * 
     * m = min element in ribbons
     * n = length of ribbons
     * 
     * time: nlog(m)
     * space: o(1)
     */
    maxLength(ribbons, k) {
        let r = Math.max(...ribbons);
        let l = 0;
        let res = 0;

        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            let count = 0;
            for (const num of ribbons) {
                count += Math.floor(num / m)
            }
            if (count >= k) {
                res = m;
                l = m + 1
            } else {
                r = m - 1;
            }

        }
        return res;
    }
}
