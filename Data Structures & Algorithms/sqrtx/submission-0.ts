class Solution {
    /**
     * @param {number} x
     * @return {number}
     * 
     * 
     * x = 13, l = 0, r = 7
     * m = 3, l = 4, r = 7
     * m = 5, l = 4, r = 4
     * m = 4, l = 4, r = 3
     *
     * 
     */
    mySqrt(x: number): number {

        let l: number = 0;
        let r: number = Math.ceil(x / 2);

        while (l <= r) {
            const mid: number = Math.floor(l + (r - l) / 2)

            if ((mid * mid) === x) {
                return mid
            } else if ((mid * mid) > x) {
                r = mid - 1
            } else {
                l = mid + 1
            }

        }

        return r
    }
}
