class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let curr: number = 1;

        let res: number = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                res = Math.max(0,res)
                curr = 1;
                continue;
            }
            curr *= nums[i]
            res = Math.max(curr,res)
        }
        
        curr = 1
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === 0) {
                res = Math.max(0,res)
                curr = 1;
                continue;
            }
            curr *= nums[i]
            res = Math.max(curr,res)
        }
        return res
    }
}
