class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        if (nums.length === 1) return true;
        const isIncreasing = nums[0] <= nums[nums.length - 1] 

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i] - nums[i - 1];
            if (isIncreasing && curr < 0) return false;
            if (!isIncreasing && curr > 0) return false;
        }

        return true;
    }
}
