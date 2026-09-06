class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     * 
     * 
     * 
     * 
     * nums = [1000,202,8]
     * product = 1000
     * l = 0
     * r = 0
     * res = 0
     * 
     * 
     * nums = [2,100,500], k = 3
     * product = 500
     * res = 1
     * l = 2
     * r = 2
     * }
     */
    numSubarrayProductLessThanK(nums, k) {
        let l = 0;
        let r = 0;
        let res = 0;
        let product = 1;
        while (r < nums.length) {
            product *= nums[r];
            while (r < nums.length && product >= k) {
                if (r === l) {
                    r++;
                    if (r < nums.length) {
                        product *= nums[r];
                    }
                } 
                product = product / nums[l];
                l++;
            }
            if (r < nums.length) {
                res += r - l + 1;
                r++;
            }
        }
        
        return res;
    }
}
