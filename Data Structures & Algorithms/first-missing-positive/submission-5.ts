class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {

        let max: number = -Infinity;
        let mySet = new Set<number>(nums);
        for (let num of nums) {
            if (num > max) {
                max = num
            }
        }
        if (max <= 0) {
            return 1
        }
        for (let i = 1; i < max; i++) {
            if (!mySet.has(i)) {
                return i
            }

        }
        return max + 1;
    }
}
