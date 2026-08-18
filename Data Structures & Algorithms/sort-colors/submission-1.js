class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const arr = new Array(3).fill(0)

        for (const num of nums) {
            arr[num]++;
        }

        let i = 0;
        let j = 0;
        while (i < nums.length) {
            while (arr[j] > 0) {
                nums[i] = j
                i++
                arr[j]--
            }
            j++;
        }

        return nums

    }
}
