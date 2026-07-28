class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {


        const binarySearch = (l: number, r: number) => {
            if (l > r) {
                return r;
            }

            const mid: number = Math.floor((l + (r - l) / 2))
            const num: number = mid * mid;

            if (num > x) {
                return binarySearch(l, mid - 1)
            } else if (num < x) {
                return binarySearch(mid + 1, r)
            } else {
                return mid
            }
        }


        return binarySearch(0, Math.ceil(x / 2))
    }
}
