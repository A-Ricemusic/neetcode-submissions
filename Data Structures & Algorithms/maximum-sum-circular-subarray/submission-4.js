class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globalMax = nums[0];
        let globalMin = nums[0];
        let currMax = nums[0];
        let currMin = nums[0];
        let total = nums[0];
        for (let i = 1; i < nums.length; i++) {
            currMax = Math.max(nums[i], currMax + nums[i]);
            currMin = Math.min(nums[i], currMin + nums[i]);
            total += nums[i];
            globalMax = Math.max(globalMax, currMax);
            globalMin = Math.min(globalMin, currMin)
        }

        return globalMax > 0? Math.max(globalMax, total - globalMin) : globalMax
    }
}
