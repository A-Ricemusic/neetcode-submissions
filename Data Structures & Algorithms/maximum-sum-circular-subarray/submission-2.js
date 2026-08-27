class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * nums = [-2,4,-5,4,-5,9,4]
     * total = 9
     * currMin = -6
     * currMax = 9
     */
    maxSubarraySumCircular(nums) {
        let total = 0
        let globalMax = nums[0];
        let globalMin = nums[0]
        let currMin = 0;
        let currMax = 0;
        for (const num of nums) {
            currMax = Math.max(num, currMax + num)
            currMin = Math.min(num, currMin + num)
            globalMax = Math.max(currMax, globalMax)
            globalMin = Math.min(currMin,globalMin)
            total += num
        }

        return globalMax > 0? Math.max(globalMax, total - globalMin) : globalMax 


    }
}
