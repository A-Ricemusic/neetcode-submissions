/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let l: number = 1
        let r: number = n

        while (l <= r ) {
            const mid: number = Math.floor(l + (r - l) / 2)
            if (guess(mid) === 0) {
                return mid
            } else if (guess(mid) === 1) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        
        return -1

    }
}
