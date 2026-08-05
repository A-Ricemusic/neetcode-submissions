class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums: number[]): number {
        let globalMax: number = nums[0];
        let globalMin: number = nums[0];
        let currMax: number = 0;
        let currMin: number = 0;
        let total: number = 0
        for (const num of nums) {
            currMax = Math.max(currMax + num, num);
            currMin = Math.min(currMin + num, num);
            total += num;
            globalMax = Math.max(currMax, globalMax);
            globalMin = Math.min(currMin, globalMin);
        }

        return globalMax < 0? globalMax : Math.max(globalMax, total - globalMin)
    }
}
