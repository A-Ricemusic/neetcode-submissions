class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Array(3).fill(0);
        for (const num of nums) count[num]++;

        let idx = 0;
        for (let color = 0; color < 3; color++) {
            while (count[color]-- > 0) {
                nums[idx++] = color
            }
        }
    }
}
