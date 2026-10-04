class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     * 
     * 
     * ex 2:
     * Input: nums = [4,7,9,10], k = 3
     * 
     * ex 3:
     * Input: nums = [1,100,105,110,115, 130], k = 3
     * 
     */
    missingElement(nums, k) {
        const set = new Set([...nums])
        let count = 0;
        for (let i = nums[0]; i < 10000000; i++) {
            if (!set.has(i)) {
                count++;
            };
            if (count === k) {
                return i;
            }
        }
    }
}
