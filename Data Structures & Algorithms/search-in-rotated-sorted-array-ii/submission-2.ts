class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     * 
     * nums=[3,5,6,0,0,0,1,2] tar = 4
     * l = 0 , r = 6 m = 3
     * 
     * 
     */
    search(nums: number[], target: number): boolean {
        let l: number = 0;
        let r: number = nums.length - 1;

        while (l <= r) {
            const m: number = Math.floor(l + (r - l) / 2);
            if (nums[m] === target) {
                return true;
            };

            if (nums[l] < nums[m]) {
                if (nums[l] <= target && target < nums[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else if (nums[l] > nums[m]) {
                if (nums[m] < target && target <= nums[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                l++; 
            }
        }

        return false;

    }
}
