/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */


/* 
[1,2,3,3,4,2,1]


*/

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target: number, mountainArr): number {

        let l: number = 0;
        let r: number = mountainArr.length() - 1;
        let peak: number = -1;


        while (l <= r) {
            const m: number = Math.floor(l + (r - l) / 2)
            const num: number = mountainArr.get(m)
            
            if (mountainArr.get(m - 1) < num && num > mountainArr.get(m + 1) ) {
                peak = m;
                if (target === num) return peak;
                break;
            } else if (mountainArr.get(m - 1) < num && num < mountainArr.get(m + 1)) {
                l = m + 1
            } else {
                r = m - 1
            }
        }

        l = 0;
        r = peak - 1

        while (l <= r) {
            const m: number = Math.floor(l + (r - l) / 2)
            const num: number = mountainArr.get(m);
            if (num === target) {
                return m;
            } else if (num > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        l = peak + 1
        r = mountainArr.length() - 1;

        while (l <= r) {
            const m: number = Math.floor(l + (r - l) / 2)
            const num: number = mountainArr.get(m);
             if (num === target) {
                return m;
            } else if (num < target) {
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return -1
    }
}
