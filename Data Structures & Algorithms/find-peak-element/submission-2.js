class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let l = 0;
        let r = nums.length - 1
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2)
            if (m - 1 < 0) {
                if (nums[m + 1] < nums[m] || m + 1 >= nums.length) {
                    return m
                } else {
                    l = m + 1
                }
            } else if (m + 1 >= nums.length) {
                if (nums[m - 1] < nums[m]) {
                    return m
                } else {
                    r = m - 1
                }
            } else if (nums[m - 1] < nums[m] && nums[m + 1] > nums[m]) {
                l = m + 1
            } else if (nums[m - 1] > nums[m] && nums[m] > nums[m + 1]) {
                r = m - 1
            }
            else if (nums[m - 1] > nums[m] && nums[m + 1] > nums[m]) {
                l = m + 1  
            } else {
                return m
            }
        }

        return 0
    }
}
