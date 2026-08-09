class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const dp: number[] = new Array(nums.length).fill(-1);
        dp[nums.length - 1] = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            let res: number = 0;
            for (let j = i; j < nums.length; j++) {
                if (nums[j] > nums[i]) {
                    res = Math.max(dp[j], res)
                }
            }
            dp[i] = res + 1
        }

        return Math.max(...dp)
    }
}
