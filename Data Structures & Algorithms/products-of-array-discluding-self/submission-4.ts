class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    /**
     * [1,1,2,8]
     * [48,24,12,1]
     */
    productExceptSelf(nums: number[]): number[] {
        let res: number[] = new Array(nums.length).fill(1);


        for (let i = 1; i < nums.length; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }
        let postFix = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= postFix
            postFix *= nums[i]
        }

        return res;
    }
}
