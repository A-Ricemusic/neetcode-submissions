class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let globalMax = nums[0];
        let total = nums[0]
        for (let i = 1; i < nums.length; i++) {
            total = Math.max(nums[i], total + nums[i])
            globalMax = Math.max(total, globalMax);
        }

        return globalMax
    }
}
