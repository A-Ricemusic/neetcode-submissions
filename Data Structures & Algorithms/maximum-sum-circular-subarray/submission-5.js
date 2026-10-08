class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globalMax = nums[0];
        let globalMin = nums[0];
        let currMax = 0;
        let currMin = 0;
        let total = 0;
        for (let i = 0; i < nums.length; i++) {
            currMax = Math.max(nums[i], currMax + nums[i]);
            currMin = Math.min(nums[i], currMin + nums[i]);
            total += nums[i];
            globalMax = Math.max(currMax, globalMax);
            globalMin = Math.min(currMin, globalMin);
        }

        return globalMax > 0? Math.max(globalMax, total - globalMin) : globalMax
    }
}
