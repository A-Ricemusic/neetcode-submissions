class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0;
        let maxSum = -Infinity;
        for (const num of nums) {
            if (currSum < 0) {
                currSum = 0
            }
            currSum += num
            maxSum = Math.max(currSum, maxSum)
        }
        return maxSum
    }
}
