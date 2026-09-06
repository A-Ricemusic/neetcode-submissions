class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     * 
     * 
     * 
     * 
     * time: o(n)
     * space: o(1)
     * }
     */
    numSubarrayProductLessThanK(nums, k) {
        let l = 0;
        let res = 0;
        let product = 1;

        for (let r = 0; r < nums.length; r++) {
            product *= nums[r];
            while (product >= k && l <= r) {
                product = product / nums[l];
                l++;
            }
            res += r - l + 1;
        }

        return res;
    }
       
}
