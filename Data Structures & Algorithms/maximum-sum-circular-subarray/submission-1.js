class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let currMin = 0, 
        currMax = 0,
        total = 0;
        let globalMin = nums[0], 
        globalMax = nums[0];


        for (const num of nums) {
            total += num
            currMax = Math.max(num, currMax + num)
            currMin = Math.min(num, currMin + num)
            globalMin = Math.min(currMin, globalMin)
            globalMax = Math.max(currMax, globalMax)
        }

        return globalMax < 0? globalMax : Math.max(globalMax, total - globalMin) 
    }
}
