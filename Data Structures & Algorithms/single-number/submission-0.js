class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * [3,2,3]
     * res = 3
     */
    singleNumber(nums) {
        let res = 0;
        for (const num of nums) {
            res = res ^ num
        }
        return res
    }
}
