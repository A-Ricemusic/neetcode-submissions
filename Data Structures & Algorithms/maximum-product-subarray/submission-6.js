class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * nums=[-2,3,-4]
     * currMax = 1
     * currMin = 1
     * tmp = -2
     */
    maxProduct(nums) {
        let res = Math.max(...nums);
        let currMax = 1;
        let currMin = 1;
   
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                currMax = 1;
                currMin = 1;
                continue;
            }
            const tmp = currMax * nums[i];
            currMax = Math.max(tmp, nums[i] * currMin, nums[i]);
            currMin = Math.min(tmp, nums[i] * currMin, nums[i]);
            res = Math.max(res, currMax)
        }

        return res;

    }
}
