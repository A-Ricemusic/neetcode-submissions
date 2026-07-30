class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let p1: number = 1

        for (let p2 = 1; p2 < nums.length; p2++) {
            if (nums[p2 - 1] != nums[p2]) {
                nums[p1] = nums[p2];
                p1++;
            }
        }

        return p1;
    }
}
