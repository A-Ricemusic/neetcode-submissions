class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let globalMax = nums[0];
        let globalMin = nums[0];
        let currMin = 0;
        let currMax = 0;
        let total = 0;

        for (const num of nums) {
            currMax = Math.max(currMax + num, num);
            currMin = Math.min(currMin + num, num);
            globalMax = Math.max(globalMax, currMax);
            globalMin = Math.min(globalMin, currMin);
            total += num
        }

        return globalMax < 0? globalMax : Math.max(total - globalMin, globalMax)
    }

}
