class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     * Input: nums = [0,6,4,6,7], k = 6
     * i = 0
     * total = 0
     * {
     *  0: -1,
     * }
     */
    checkSubarraySum(nums, k) {
        const hashMap = new Map()
        hashMap.set(0,-1)
        let total = 0
        for (let i = 0; i < nums.length; i++) {
            total += nums[i]
            const remain = total % k
            if (remain < 0) remain += k;
            if (hashMap.has(remain)) {
                if (i - hashMap.get(remain) >= 2) {
                    return true
                }
            }
            if (!hashMap.has(remain)) {
                hashMap.set(remain, i)
            }
            
        }
        return false;
    }
}
