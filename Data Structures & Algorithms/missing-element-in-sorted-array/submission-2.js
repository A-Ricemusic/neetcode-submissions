class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     * 
     * 
     * ex 2:
     * Input: nums = [4,7,9,10], k = 3
     * [1,5,100,7,8]
     * nums[i] = nums[0] + i
     * 
     * m = 1
     * nums[mid] - nums[0] - mid < k
     * 
     * ex 3:
     * l = 0, r = 5
     * m = 2
     * Input: nums = [1,100,105,110,115, 130], k = 3
     * 
     * 
     * 
     */
    missingElement(nums, k) {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            const m = r - Math.floor((r - l) / 2);
            if (nums[m] - nums[0] - m < k) {
                l = m
            } else {
                r = m - 1;
            }
        }

        return nums[0] + k + l;
    }
}
