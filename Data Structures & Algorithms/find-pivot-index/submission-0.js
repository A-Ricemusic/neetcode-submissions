class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * nums = [1,7,3,6,5,6]
     *  total = 28
     *  prefix = 17
     */
    pivotIndex(nums) {
        const total = nums.reduce((a,b) => a + b, 0);
        let prefix = 0
        for (let i = 0; i < nums.length; i++) {
            if (total - prefix - nums[i] === prefix) return i;
            prefix += nums[i]
        }

        return -1
    }
}
