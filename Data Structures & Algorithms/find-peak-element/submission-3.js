class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = l + ((r - l) >> 1);

            if (nums[m] < nums[m + 1]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return l; 
    }
}
