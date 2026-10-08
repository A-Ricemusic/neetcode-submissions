class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let globalMax = nums[0];
        let currSum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            currSum = Math.max(nums[i], currSum + nums[i]);
            globalMax = Math.max(globalMax, currSum);
        };

        return globalMax;
    }
}
