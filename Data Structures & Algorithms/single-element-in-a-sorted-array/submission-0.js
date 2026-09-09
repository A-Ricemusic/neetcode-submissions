class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * n = 15
     * m = 7
     *         0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
     * nums = [1,1,2,3,3,4,4,8,8,9,9,10,10,11,12]
     * 
     *         0 1 2 3 4 5 6 7 8
     * nums = [2,2,4,6,6,8,8,9,9]
     *         0 1 2 3 4 5 6 7 8
     * nums = [2,2,4,4,6,6,8,8,9]
     * 
      min = 2 => 0
      max = 8 => 9
     * 
     *
     */
    singleNonDuplicate(nums) {
        if (nums[0] !== nums[1]) return nums[0];
        if (nums.at(-1) !== nums.at(-2)) return nums.at(-1);
        let l = 2;
        let r = nums.length - 3;
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            const isEven = m % 2 === 0;
            if (nums[m - 1] !== nums[m] && nums[m + 1] !== nums[m]) {
                return nums[m]
            } else if (nums[m - 1] === nums[m]) {
                if (isEven) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            } else if (nums[m + 1] === nums[m]) {
                if (isEven) {
                    l = m + 1
                } else {
                    r = m - 1
                }
            }
        }

    }
}
