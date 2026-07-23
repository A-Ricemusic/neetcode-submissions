class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let res: number = nums.length;

        for (let i = 0; i < nums.length; i++) {
            res = res + (i - nums[i]); 
        }

        return res;
    }

}
