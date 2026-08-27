class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = Math.max(...nums)
        let curr = 0
        for (const num of nums) {
            curr += num
            res = Math.max(res, curr)
            if (curr < 0) curr = 0
        }
        return res
    }
}
