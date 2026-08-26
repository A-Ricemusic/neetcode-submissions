class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const hashMap = new Map();
        hashMap.set(0,1)
        let total = 0;
        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            total += nums[i]
            const comp = total - k
            if (hashMap.has(comp)) {
                res += hashMap.get(comp)
            }
            hashMap.set(total, (hashMap.get(total) || 0) + 1)
        }

        return res
    }
}
