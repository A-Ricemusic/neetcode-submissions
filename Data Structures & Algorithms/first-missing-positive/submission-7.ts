class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
                nums[i] = 0
            }
        }

         for (let i = 0; i < nums.length; i++) {
            let currIdx: number = Math.abs(nums[i]) - 1
            if (currIdx >= 0 && currIdx < nums.length) {
                if (nums[currIdx] > 0) {
                    nums[currIdx] = nums[currIdx] * -1
                } else if (nums[currIdx] === 0) {
                    nums[currIdx] = -1
                }
            }
           
        }
        for (let i = 1; i < nums.length + 1; i++) {
            let currIdx: number = i - 1;
            if (nums[currIdx] >= 0) {
                return i
            }
        }
        return nums.length + 1

    }
}
