class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums: number[], target: number): boolean {
        //o(n) not optimal:

        for (let num of nums) {
            if (num === target) {
                return true
            }
        }

        return false
    }
}
