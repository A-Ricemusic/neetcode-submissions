class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        if (target > nums[nums.length - 1]) {
            return nums.length
        }

        if (target <= nums[0]) {
            return 0
        }

        let l: number = 0;
        let r: number = nums.length - 1;

        while (l <= r) {
            const mid: number = Math.floor((r + l) / 2);
            if (target === nums[mid]) {
                return mid
            } else if (target > nums[mid]) {
                l = mid + 1
            } else if (target < nums[mid]) {
                r = mid - 1
            }
        }

        return r + 1;
    }
}
